"use client";

import { useState } from "react";
import { cn, noProp } from "@/lib/utils";
import Popover from "@/refresh-components/Popover";
import { OpenButton } from "@opal/components";
import LineItem from "@/refresh-components/buttons/LineItem";
import { Button } from "@opal/components";
import { SvgBubbleText, SvgSearchMenu, SvgSidebar } from "@opal/icons";
import { useSettingsContext } from "@/providers/SettingsProvider";
import type { AppMode } from "@/providers/QueryControllerProvider";
import useAppFocus from "@/hooks/useAppFocus";
import { useQueryController } from "@/providers/QueryControllerProvider";
import { usePaidEnterpriseFeaturesEnabled } from "@/components/settings/usePaidEnterpriseFeaturesEnabled";
import { useAppSidebarContext } from "@/providers/AppSidebarProvider";
import useScreenSize from "@/hooks/useScreenSize";

/**
 * Lightweight chrome overlay for the NRF page.
 *
 * Renders only the search/chat mode toggle (top-left), floating transparently
 * over NRFPage's background. Footer (version/slogan) is hidden. This avoids
 * pulling in the full AppLayouts.Root Header which carries heavy state
 * management (share/delete/move modals) that the extension doesn't need.
 */
export default function NRFChrome() {
  const isPaidEnterpriseFeaturesEnabled = usePaidEnterpriseFeaturesEnabled();
  const { state, setAppMode } = useQueryController();
  const settings = useSettingsContext();
  const { isMobile } = useScreenSize();
  const { setFolded } = useAppSidebarContext();
  const appFocus = useAppFocus();
  const [modePopoverOpen, setModePopoverOpen] = useState(false);

  const effectiveMode: AppMode =
    appFocus.isNewSession() && state.phase === "idle" ? state.appMode : "chat";

  const showModeToggle =
    isPaidEnterpriseFeaturesEnabled &&
    settings.isSearchModeAvailable &&
    appFocus.isNewSession() &&
    state.phase === "idle";

  const showHeader = isMobile || showModeToggle;

  return (
    <>
      {/* Header chrome — top-left, mirrors position of settings button at top-right */}
      {showHeader && (
        <div className="absolute top-0 left-0 p-4 z-10 flex flex-row items-center gap-2">
          {isMobile && (
            <Button
              prominence="internal"
              icon={SvgSidebar}
              onClick={() => setFolded(false)}
            />
          )}
          {showModeToggle && (
            <Popover open={modePopoverOpen} onOpenChange={setModePopoverOpen}>
              <Popover.Trigger asChild>
                <OpenButton
                  icon={
                    effectiveMode === "search" ? SvgSearchMenu : SvgBubbleText
                  }
                >
                  {effectiveMode === "search" ? "Search" : "Chat"}
                </OpenButton>
              </Popover.Trigger>
              <Popover.Content align="start" width="lg">
                <Popover.Menu>
                  <LineItem
                    icon={SvgSearchMenu}
                    selected={effectiveMode === "search"}
                    description="Quick search for documents"
                    onClick={noProp(() => {
                      setAppMode("search");
                      setModePopoverOpen(false);
                    })}
                  >
                    Search
                  </LineItem>
                  <LineItem
                    icon={SvgBubbleText}
                    selected={effectiveMode === "chat"}
                    description="Conversation and research"
                    onClick={noProp(() => {
                      setAppMode("chat");
                      setModePopoverOpen(false);
                    })}
                  >
                    Chat
                  </LineItem>
                </Popover.Menu>
              </Popover.Content>
            </Popover>
          )}
        </div>
      )}
    </>
  );
}

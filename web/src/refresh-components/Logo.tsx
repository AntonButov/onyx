"use client";

import { useSettingsContext } from "@/providers/SettingsProvider";
import Image from "next/image";
import {
  LOGO_FOLDED_SIZE_PX,
  NEXT_PUBLIC_DO_NOT_USE_TOGGLE_OFF_DANSWER_POWERED,
} from "@/lib/constants";
import { PRODUCT_DISPLAY_NAME, resolveProductDisplayName } from "@/lib/branding";
import { ClearDocsBrandMark } from "@/components/brand/ClearDocsBrandMark";
import { cn } from "@/lib/utils";
import Text from "@/refresh-components/texts/Text";
import Truncated from "@/refresh-components/texts/Truncated";
import { useCallback } from "react";

export interface LogoProps {
  folded?: boolean;
  size?: number;
  className?: string;
}

export default function Logo({ folded, size, className }: LogoProps) {
  const foldedSize = size ?? LOGO_FOLDED_SIZE_PX;
  const settings = useSettingsContext();
  const logoDisplayStyle = settings.enterpriseSettings?.logo_display_style;
  const applicationName = settings.enterpriseSettings?.application_name;
  const displayName = resolveProductDisplayName(applicationName);

  const renderLogoMark = useCallback(
    (decorative: boolean) => {
      if (settings.enterpriseSettings?.use_custom_logo) {
        return (
          <div
            className={cn(
              "aspect-square rounded-full overflow-hidden relative flex-shrink-0",
              className
            )}
            style={{ height: foldedSize, width: foldedSize }}
          >
            <Image
              alt={PRODUCT_DISPLAY_NAME}
              src="/api/enterprise-settings/logo"
              fill
              className="object-cover object-center"
              sizes={`${foldedSize}px`}
            />
          </div>
        );
      }
      return (
        <ClearDocsBrandMark
          size={foldedSize}
          className={className}
          decorative={decorative}
          priority
        />
      );
    },
    [
      className,
      foldedSize,
      settings.enterpriseSettings?.use_custom_logo,
    ]
  );

  const renderNameAndPoweredBy = (opts: {
    includeLogo: boolean;
    includeName: boolean;
  }) => {
    const emblemDecorative =
      Boolean(opts.includeName) && !folded && opts.includeLogo;

    return (
      <div className="flex min-w-0 gap-2">
        {opts.includeLogo && renderLogoMark(emblemDecorative)}
        {!folded && (
          /* H3 text is 4px larger (28px) than the Logo icon (24px), so negative margin hack. */
          <div className="flex flex-1 flex-col -mt-0.5">
            {opts.includeName && (
              <Truncated
                headingH3
                className="text-action-link-04"
                style={{ color: "var(--action-link-04)" }}
              >
                {displayName}
              </Truncated>
            )}
            {!NEXT_PUBLIC_DO_NOT_USE_TOGGLE_OFF_DANSWER_POWERED && (
              <Text
                secondaryBody
                text03
                className={"line-clamp-1 truncate"}
                nowrap
              >
                Powered by {PRODUCT_DISPLAY_NAME}
              </Text>
            )}
          </div>
        )}
      </div>
    );
  };

  // Handle "logo_only" display style
  if (logoDisplayStyle === "logo_only") {
    return renderNameAndPoweredBy({ includeLogo: true, includeName: false });
  }

  // Handle "name_only" display style
  if (logoDisplayStyle === "name_only") {
    return renderNameAndPoweredBy({ includeLogo: false, includeName: true });
  }

  // Handle "logo_and_name" or default behavior (treat whitespace-only as unset)
  return applicationName?.trim() ? (
    renderNameAndPoweredBy({ includeLogo: true, includeName: true })
  ) : folded ? (
    <ClearDocsBrandMark
      size={foldedSize}
      className={className}
      decorative={false}
      priority
    />
  ) : (
    <div className="flex min-w-0 items-center gap-2">
      <ClearDocsBrandMark
        size={foldedSize}
        className={className}
        decorative
        priority
      />
      <Truncated
        headingH3
        className="text-action-link-04"
        style={{ color: "var(--action-link-04)" }}
      >
        {displayName}
      </Truncated>
    </div>
  );
}

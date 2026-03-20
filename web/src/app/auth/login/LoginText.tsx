"use client";

import React, { useContext } from "react";
import { SettingsContext } from "@/providers/SettingsProvider";
import Text from "@/refresh-components/texts/Text";
import { S } from "@/lib/strings";

export default function LoginText() {
  const settings = useContext(SettingsContext);
  return (
    <div className="w-full flex flex-col ">
      <Text as="p" headingH2 text05>
        {S.auth.welcomeTo}{" "}
        {(settings && settings?.enterpriseSettings?.application_name) ||
          S.layout.appName}
      </Text>
      <Text as="p" text03 mainUiMuted>
        {S.auth.tagline}
      </Text>
    </div>
  );
}

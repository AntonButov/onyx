"use client";

import { useState } from "react";
import InputSelect from "@/refresh-components/inputs/InputSelect";
import { Label } from "@/components/Field";
import { S } from "@/lib/strings";

interface ReferralSourceSelectorProps {
  defaultValue?: string;
}

export default function ReferralSourceSelector({
  defaultValue,
}: ReferralSourceSelectorProps) {
  const [referralSource, setReferralSource] = useState(defaultValue);

  const referralOptions = [
    { value: "search", label: S.auth.referralSearchEngine },
    { value: "friend", label: S.auth.referralFriend },
    { value: "linkedin", label: S.auth.referralLinkedin },
    { value: "twitter", label: S.auth.referralTwitter },
    { value: "hackernews", label: S.auth.referralHackernews },
    { value: "reddit", label: S.auth.referralReddit },
    { value: "youtube", label: S.auth.referralYoutube },
    { value: "podcast", label: S.auth.referralPodcast },
    { value: "blog", label: S.auth.referralBlog },
    { value: "ads", label: S.auth.referralAds },
    { value: "other", label: S.auth.referralOther },
  ];

  const handleChange = (value: string) => {
    setReferralSource(value);
    const cookies = require("js-cookie");
    cookies.set("referral_source", value, {
      expires: 365,
      path: "/",
      sameSite: "strict",
    });
  };

  return (
    <div className="w-full gap-y-2 flex flex-col">
      <Label className="text-text-950" small={false}>
        {S.auth.referralHowHear}
      </Label>
      <InputSelect value={referralSource} onValueChange={handleChange}>
        <InputSelect.Trigger placeholder={S.auth.referralSelectPlaceholder} />

        <InputSelect.Content>
          {referralOptions.map((option) => (
            <InputSelect.Item key={option.value} value={option.value}>
              {option.label}
            </InputSelect.Item>
          ))}
        </InputSelect.Content>
      </InputSelect>
    </div>
  );
}

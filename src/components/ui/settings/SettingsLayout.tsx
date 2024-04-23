import React, { ReactNode } from "react";

type SettingsLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  additionalButton?: ReactNode;
};
export default function SettingsLayout(props: SettingsLayoutProps) {
  return (
    <main className="flex-auto shadowDiv p-8">
      <div>
        <h2 className="text-xl leading-7 font-bold text-primary-text-color">
          {props.title}
        </h2>
        <p className="flex justify-between [&>*]:text-sm [&>*]:leading-7">
          <span className="text-primary-text-color">{props.description}</span>
          {props.additionalButton && props.additionalButton}
        </p>
        <dl className="mt-6 border-t-[1px] border-primary-text-color leading-6 mb-0"></dl>
        {props.children}
      </div>
    </main>
  );
}

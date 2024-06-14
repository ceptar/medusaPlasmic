// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tLq7qfzTbVAthGrdHBHujA
// Component: 3aVPtnMnnLTO

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: 5PPoJ-eUqIWV/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tLq7qfzTbVAthGrdHBHujA/projectcss
import sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: 3aVPtnMnnLTO/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: 3qiBQVgcSBzr/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: fdU6wABrtWAZ/icon
import YoutubeIcon from "./icons/PlasmicIcon__Youtube"; // plasmic-import: ouXDU3uQjiv1/icon
import PintrestIcon from "./icons/PlasmicIcon__Pintrest"; // plasmic-import: vdAzh-bB2vJx/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: cghuqIF11_Xl/icon

createPlasmicElementProxy;

export type PlasmicCopyrightSocialLanguage__VariantMembers = {};
export type PlasmicCopyrightSocialLanguage__VariantsArgs = {};
type VariantPropType = keyof PlasmicCopyrightSocialLanguage__VariantsArgs;
export const PlasmicCopyrightSocialLanguage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCopyrightSocialLanguage__ArgsType = {};
type ArgPropType = keyof PlasmicCopyrightSocialLanguage__ArgsType;
export const PlasmicCopyrightSocialLanguage__ArgProps =
  new Array<ArgPropType>();

export type PlasmicCopyrightSocialLanguage__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultCopyrightSocialLanguageProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCopyrightSocialLanguage__RenderFunc(props: {
  variants: PlasmicCopyrightSocialLanguage__VariantsArgs;
  args: PlasmicCopyrightSocialLanguage__ArgsType;
  overrides: PlasmicCopyrightSocialLanguage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__wYnzr)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bZNc)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"\u00a9 2021 ShoeShop, Inc. All Rights Reserved."}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__uA9Ft)}>
            <Button
              iconOnly={true}
              link={"http://twitter.com"}
              startIcon={
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg__ySc94)}
                  role={"img"}
                />
              }
              submitsForm={true}
            />

            <Button
              className={classNames("__wab_instance", sty.button__h0Ytl)}
              iconOnly={true}
              link={"http://youtube.com"}
              startIcon={
                <YoutubeIcon
                  className={classNames(projectcss.all, sty.svg__wUtAb)}
                  role={"img"}
                />
              }
              submitsForm={true}
            />

            <Button
              className={classNames("__wab_instance", sty.button__oOOyY)}
              iconOnly={true}
              link={"http://pinterest.com"}
              startIcon={
                <PintrestIcon
                  className={classNames(projectcss.all, sty.svg__ewEUc)}
                  role={"img"}
                />
              }
              submitsForm={true}
            />
          </div>
        </Stack__>
        <Button
          className={classNames("__wab_instance", sty.button__nbyBk)}
          endIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__m81Ly)}
              role={"img"}
            />
          }
          showEndIcon={true}
          startIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__vV4E)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          {"English"}
        </Button>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCopyrightSocialLanguage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCopyrightSocialLanguage__VariantsArgs;
    args?: PlasmicCopyrightSocialLanguage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCopyrightSocialLanguage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCopyrightSocialLanguage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
          internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */
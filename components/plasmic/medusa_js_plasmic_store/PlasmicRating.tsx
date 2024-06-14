// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tLq7qfzTbVAthGrdHBHujA
// Component: YMS5-Ryhwuzj

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tLq7qfzTbVAthGrdHBHujA/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: YMS5-Ryhwuzj/css

import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: 5Tjt0lR6Hmbm/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: KDC0UYpHXcXs/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: v9FcutVi9dP1/icon

createPlasmicElementProxy;

export type PlasmicRating__VariantMembers = {
  rating:
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf";
};
export type PlasmicRating__VariantsArgs = {
  rating?: SingleChoiceArg<
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf"
  >;
};
type VariantPropType = keyof PlasmicRating__VariantsArgs;
export const PlasmicRating__VariantProps = new Array<VariantPropType>("rating");

export type PlasmicRating__ArgsType = {};
type ArgPropType = keyof PlasmicRating__ArgsType;
export const PlasmicRating__ArgProps = new Array<ArgPropType>();

export type PlasmicRating__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultRatingProps {
  rating?: SingleChoiceArg<
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRating__RenderFunc(props: {
  variants: PlasmicRating__VariantsArgs;
  args: PlasmicRating__ArgsType;
  overrides: PlasmicRating__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rating
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__nJ7Z3, {
          [sty.svgrating_five__nJ7Z3UNla7]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__nJ7Z3In2Dt]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__nJ7Z3ZBxVa]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_half__nJ7Z3XtV80]: hasVariant(
            $state,
            "rating",
            "half"
          ),
          [sty.svgrating_oneHalf__nJ7Z30Xohz]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_one__nJ7Z3W4YmY]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf__nJ7Z3KKibX]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__nJ7Z3Ua1Q]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__nJ7Z3Rtqux]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__nJ7Z3KB1Z1]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__p9Vmb, {
          [sty.svgrating_five__p9VmBuNla7]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__p9VmbIn2Dt]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__p9VmBzBxVa]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_oneHalf__p9Vmb0Xohz]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_threeHalf__p9VmbkKibX]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__p9Vmbua1Q]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__p9VmBrtqux]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__p9VmBkB1Z1]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg___2HnKc, {
          [sty.svgrating_five___2HnKcuNla7]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf___2HnKcIn2Dt]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four___2HnKczBxVa]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf___2HnKcKKibX]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three___2HnKcUa1Q]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf___2HnKcrtqux]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__x3XqA, {
          [sty.svgrating_five__x3XqAuNla7]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__x3XqAIn2Dt]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__x3XqAzBxVa]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__x3XqAkKibX]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__xqabk, {
          [sty.svgrating_five__xqabkuNla7]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__xqabkIn2Dt]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRating__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRating__VariantsArgs;
    args?: PlasmicRating__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRating__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRating__ArgsType,
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
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */

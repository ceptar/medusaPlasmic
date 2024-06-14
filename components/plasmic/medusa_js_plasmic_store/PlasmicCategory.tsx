// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tLq7qfzTbVAthGrdHBHujA
// Component: PcQA6gjeHjIH

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import NavBar from "../../NavBar"; // plasmic-import: -0uusTYYAXza/component
import Button from "../../Button"; // plasmic-import: 5PPoJ-eUqIWV/component
import ProductCard from "../../ProductCard"; // plasmic-import: 7SDVrakTDPfy/component
import Rating from "../../Rating"; // plasmic-import: YMS5-Ryhwuzj/component
import Footer from "../../Footer"; // plasmic-import: fIOtKb0bOfTn/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_5RS7WwfAhuZu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 5rS7WwfAhuZu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tLq7qfzTbVAthGrdHBHujA/projectcss
import sty from "./PlasmicCategory.module.css"; // plasmic-import: PcQA6gjeHjIH/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: fdU6wABrtWAZ/icon

createPlasmicElementProxy;

export type PlasmicCategory__VariantMembers = {};
export type PlasmicCategory__VariantsArgs = {};
type VariantPropType = keyof PlasmicCategory__VariantsArgs;
export const PlasmicCategory__VariantProps = new Array<VariantPropType>();

export type PlasmicCategory__ArgsType = {};
type ArgPropType = keyof PlasmicCategory__ArgsType;
export const PlasmicCategory__ArgProps = new Array<ArgPropType>();

export type PlasmicCategory__OverridesType = {
  root?: Flex__<"div">;
  navBar?: Flex__<typeof NavBar>;
  section?: Flex__<"section">;
  container6?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultCategoryProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCategory__RenderFunc(props: {
  variants: PlasmicCategory__VariantsArgs;
  args: PlasmicCategory__ArgsType;
  overrides: PlasmicCategory__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_5RS7WwfAhuZu()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicCategory.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCategory.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCategory.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicCategory.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicCategory.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicCategory.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
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
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
            searchOpen={true}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"container6"}
              data-plasmic-override={overrides.container6}
              hasGap={true}
              className={classNames(projectcss.all, sty.container6)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bj1Mv)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__tQu16)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dludh
                    )}
                  >
                    {"Categories"}
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button___6SFsI)}
                    states={"active"}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___8BTu
                      )}
                    >
                      {"All"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button___1T4F)}
                    submitsForm={true}
                  >
                    {"Womens"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__wc07S)}
                    submitsForm={true}
                  >
                    {"Mens"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__ocqEb)}
                    submitsForm={true}
                  >
                    {"Kids"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button___44EKr)}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hzg
                      )}
                    >
                      {"On sale"}
                    </div>
                  </Button>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__kUqJz)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jIz7T
                    )}
                  >
                    {"Price"}
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__z2T8N)}
                    submitsForm={true}
                  >
                    {"$0 - $50"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__kge5T)}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yix5Y
                      )}
                    >
                      {"$51 - $99"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__gu2Xe)}
                    submitsForm={true}
                  >
                    {"$101+"}
                  </Button>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fr5IF)}
              >
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard___0H7Rj
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nr
                    )}
                  >
                    {"Nike Air Zoom Pegasus 38 Limited Edition"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mDtd0
                    )}
                  >
                    {"Women's Running Shoe"}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__cbvOa
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hpvRi
                    )}
                  >
                    {"NMD_R1 SHOES"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wrxOh
                    )}
                  >
                    {"Continue the NMD legacy in these adidas NMD_R1 Shoes."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__cDgCc
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__noUiY
                    )}
                  >
                    {"Question Low Men's Basketball Shoes"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__koila
                    )}
                  >
                    {"Lace up fierce baller style."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__bv48
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rkd2I
                    )}
                  >
                    {"Cali Women's Sneakers"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0E7Fw
                    )}
                  >
                    {"A sport style turned street classic."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__vkoy
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lAnKm
                    )}
                  >
                    {"MAGIC SPEED"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uYec8
                    )}
                  >
                    {"mMade for racing or regular training runs."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__aZ3Z
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xjFg
                    )}
                  >
                    {"Pride Chuck Taylor All Star"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__i1YKq
                    )}
                  >
                    {"If you can dream it, you can build it."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__sXvux
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__t4BMn
                    )}
                  >
                    {"Nike Air Zoom Pegasus 38"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dTZm
                    )}
                  >
                    {"Your workhorse with wings returns."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__mybrI
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sOoSp
                    )}
                  >
                    {"GEL-Nimbus 22 Retro Tokyo"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ldLxx
                    )}
                  >
                    {"Enjoy comfort with each stride."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__rHnQa
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dKsF
                    )}
                  >
                    {"A Bug's World Chuck Taylor All Star"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__og4G1
                    )}
                  >
                    {"Allover glow-in-the-dark bug prints."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__wuIgk
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oA3GC
                    )}
                  >
                    {"NMD_R1 SHOES"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___25McH
                    )}
                  >
                    {
                      "Effortlessly step up your look than a pop of animal print."
                    }
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__z0PZ
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5V3W
                    )}
                  >
                    {"Suede Teams Little Kids' Shoes"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jzqFj
                    )}
                  >
                    {"Worn by the icons of every generation."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__t9LlT
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qUkg
                    )}
                  >
                    {"SUPERSTAR 360 PRIMEBLUE SANDALS"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pmAKo
                    )}
                  >
                    {"Your workhorse with wings returns."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__cBMs
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__knomR
                    )}
                  >
                    {"SUPERSTAR 360 PRIMEBLUE SANDALS"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__w07M5
                    )}
                  >
                    {"Your workhorse with wings returns."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__cFw1
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7EvOp
                    )}
                  >
                    {"SUPERSTAR 360 PRIMEBLUE SANDALS"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cJRw
                    )}
                  >
                    {"Your workhorse with wings returns."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard__k5Hce
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kn9Go
                    )}
                  >
                    {"SUPERSTAR 360 PRIMEBLUE SANDALS"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__f4LH
                    )}
                  >
                    {"Your workhorse with wings returns."}
                  </div>
                </ProductCard>
                <ProductCard
                  className={classNames(
                    "__wab_instance",
                    sty.productCard___9ChO
                  )}
                  link={`/product/[handle]`}
                  small={true}
                  tags={
                    <Button
                      colors={"lightGray"}
                      size={"small"}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___19YQ
                    )}
                  >
                    {"SUPERSTAR 360 PRIMEBLUE SANDALS"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__u5FA7
                    )}
                  >
                    {"Your workhorse with wings returns."}
                  </div>
                </ProductCard>
              </Stack__>
            </Stack__>
          </section>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navBar", "section", "container6", "footer"],
  navBar: ["navBar"],
  section: ["section", "container6"],
  container6: ["container6"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar: typeof NavBar;
  section: "section";
  container6: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCategory__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCategory__VariantsArgs;
    args?: PlasmicCategory__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCategory__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCategory__ArgsType,
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
          internalArgPropNames: PlasmicCategory__ArgProps,
          internalVariantPropNames: PlasmicCategory__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCategory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategory";
  } else {
    func.displayName = `PlasmicCategory.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "tLq7qfzTbVAthGrdHBHujA"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicCategory = Object.assign(
  // Top-level PlasmicCategory renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    container6: makeNodeComponent("container6"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicCategory
    internalVariantProps: PlasmicCategory__VariantProps,
    internalArgProps: PlasmicCategory__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Category",
      description:
        "Inceptos tempor torquent tortor a aptent parturient a a himenaeos in ipsum ad vestibulum euismod ultrices dis vulputate vestibulum non adipiscing.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCategory;
/* prettier-ignore-end */
"use client";

import React, { useRef } from "react";
import {arrow, offset, useFloating, useMergeRefs} from "@floating-ui/react";
import FloatingPointer from "@/app/_components/FloatingPointer/FloatingPointer";
import { Fab } from "@andore-ui/fab";
import ColorItem from "@/app/_components/ColorItem/ColorItem";

const PaintIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    viewBox="0 -960 960 960"
    width="100%"
    fill="currentColor"
  >
    <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
  </svg>
);

const SchematicDarkModeButton = () => {
  const arrowBackgroundRef = useRef(null);
  const arrowTextRef = useRef(null);

  const {
    refs: refsBackground,
    floatingStyles: floatingStylesBackground,
    middlewareData: middlewareDataBackground,
  } = useFloating({
    placement: "left",
    middleware: [
      offset(20),
      arrow({
        element: arrowBackgroundRef,
      }),
    ],
  });

  const {
    refs: refsText,
    floatingStyles: floatingStylesText,
    middlewareData: middlewareDataText,
  } = useFloating({
    placement: "right",
    middleware: [
      offset(15),
      arrow({
        element: arrowTextRef,
      }),
    ],
  });

  const ref = useMergeRefs([
    refsBackground.setReference,
    refsText.setReference,
  ]);

  return (
    <div className={"w-fit h-fit flex flex-col gap-4"}>
      <div>
        <Fab icon={<PaintIcon />} ref={ref} />
      </div>
      <FloatingPointer
        placement={"left"}
        ref={refsBackground.setFloating}
        arrowRef={arrowBackgroundRef}
        middlewareData={middlewareDataBackground}
        style={floatingStylesBackground}
      >
        <ColorItem color={'rgb(var(--aui-primary-dark-container))'}  name='primary-dark-container' />
      </FloatingPointer>
      <FloatingPointer
          placement={"right"}
          ref={refsText.setFloating}
          arrowRef={arrowTextRef}
          middlewareData={middlewareDataText}
          style={floatingStylesText}
      >
        <ColorItem
            color={"rgb(var(--aui-primary-dark-shadow-md))"}
            name={"shadow-dark-md"}
        />
      </FloatingPointer>
    </div>
  );
};

export default SchematicDarkModeButton;

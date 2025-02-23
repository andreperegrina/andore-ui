import React from "react";
import { List } from "@andore-ui/list";
import { ThemeType, ThemeCoreColor } from "@andore-ui/theme";
import ColorItem from "@/app/_components/ColorItem/ColorItem";
import { Typography } from "@andore-ui/typography";

interface PrimaryColorListProps {
  colors: ThemeType["colors"];
  onClick?: (
    event: React.MouseEvent<HTMLElement>,
    name: string,
    color: string,
  ) => void;
}

const primaryColors = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

const PrimaryColorList = (props: PrimaryColorListProps) => {
  const { colors, onClick } = props;
  const handleClick =
    (name: string) => (event: React.MouseEvent<HTMLElement>, color: string) => {
      if (onClick) {
        onClick(event, name, color);
      }
    };
  return primaryColors.map((color) => {
    const colorValue = colors[color] as ThemeCoreColor;
    return (
      <div className={"w-fit h-fit flex flex-col gap-2"} key={color}>
        <Typography variant={"body"} size={"sm"} className={"font-semibold"}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Typography>
        <List className={"flex-row"}>
          <ColorItem
            color={colorValue.DEFAULT}
            name={"default"}
            onClick={handleClick(`${color}.DEFAULT`)}
          />
          <ColorItem
            color={colorValue.text}
            name={"text"}
            onClick={handleClick(`${color}.text`)}
          />
          <ColorItem
            color={colorValue.container}
            name={"container"}
            onClick={handleClick(`${color}.container`)}
          />
          <ColorItem
            color={colorValue["container-text"]}
            name={"container text"}
            onClick={handleClick(`${color}.container-text`)}
          />
        </List>
      </div>
    );
  });
};

export default PrimaryColorList;

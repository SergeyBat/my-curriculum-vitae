export type Mods = Record<string, boolean | string | undefined>;

export type Args = [
  elementName?: string,
  modifiers?: Mods,
  additional?: Array<string | undefined>,
]

export type ModuleStyles = Record<string, string>;

type BemOnlyModule = (...args: Args) => string;

const checkClassInModule = (className: string, styles: ModuleStyles): string => {
  return styles[className] || className;
}

export function bem(
  blockName: string,
  styles: ModuleStyles = {}
): BemOnlyModule {
  return (...args: Args): string => {
    const [
      elementName= '',
      modifiers = {},
      additionalStyles = [],
    ] = args;

    const fullElementName: string =  elementName ? blockName.concat(blockName ?'__' : '', elementName) : blockName
    let elementNameWithAffix: string;


    if (elementName && !styles[fullElementName]) {
      elementNameWithAffix = styles[elementName] || fullElementName;
    } else {
      elementNameWithAffix = checkClassInModule(
        elementName
          ? fullElementName
          : blockName,
        styles
      )
    }


    return [
      elementNameWithAffix,
      ...Object.entries(modifiers)
        .filter((item) => Boolean(item[1]))
        .map(([className]) => checkClassInModule(
          fullElementName.concat('_', className),
          styles
        )),
      ...additionalStyles.filter(value => Boolean(value)),
    ].join(' ');
  }
};

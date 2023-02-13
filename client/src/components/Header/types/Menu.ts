export type MenuProp = {
  pages: Array<Page>;
};

export interface Page {
  [pageProperty: string]: string;
}

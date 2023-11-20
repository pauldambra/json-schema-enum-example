export declare enum CanvasContext {
  "2D" = 0,
  WebGL = 1,
  WebGL2 = 2,
}

export type canvasMutationParam = {
  id: number;
  type: CanvasContext;
};

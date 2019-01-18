export interface IActionWithPayload<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface IAction<T> {
  readonly type: T;
}

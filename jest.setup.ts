import "@testing-library/jest-dom";

import "@testing-library/jest-dom";

if (!window.PointerEvent) {
  class PointerEvent extends MouseEvent {}
  window.PointerEvent = PointerEvent as typeof window.PointerEvent;
}

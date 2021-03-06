export interface IHintService {
    initialize(IHintOptions): void;
}

export interface IHintOptions {
    elementsDisabled: boolean;
    defaultPosition: string;
    defaultOrder: number;
    defaultLayer: number;
    applyRelative: boolean;
    stepTag: string;
    dismissOnOverlay: boolean;
}

export class HintOptions implements IHintOptions {
    elementsDisabled: boolean = true;
    defaultPosition: string = HintConfig.DEFAULT_POSITION;
    defaultOrder: number = HintConfig.DEFAULT_ORDER;
    defaultLayer: number = HintConfig.DEFAULT_PX_LAYER;
    applyRelative: boolean = HintConfig.APPLY_RELATIVE;
    stepTag: string = HintConfig.HINT_TAG;
    dismissOnOverlay: boolean = HintConfig.DISMISS_ON_OVERLAY;
}

export const HintConfig = {
    HINT_TAG: 'vcl-tour-step',
    DEFAULT_POSITION: 'bottom',
    Z_INDEX: '999',
    DEFAULT_ORDER: 99,
    DEFAULT_PX_LAYER: 15,
    APPLY_RELATIVE: true,
    DISMISS_ON_OVERLAY: false,
  };

  export enum Placement {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right'
  }

  export interface Step {
    selector: string;
    order: number;
  }
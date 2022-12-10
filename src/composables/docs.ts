import type MdConfig from './docs.type'

export const mdConfig = () => {
  const baseLink = 'https://gitee.com/bad_-code/kviewui/tree/master/components'

  return <MdConfig>{
    button: {
      // 组件源码仓库地址
      linkCode: `${baseLink}/kui-button`,
      // 演示代码组件映射
      showPath: {
        'block': 'button/BlockButton',
        'custom-color': 'button/CustomColorButton',
        'disabled': 'button/DisabledButton',
        'icon': 'button/IconButton',
        'loading': 'button/LoadingButton',
        'shadow': 'button/ShadowButton',
        'shape': 'button/ShapeButton',
        'size': 'button/SizeButton',
        'text': 'button/TextButton',
        'theme': 'button/ThemeButton',
      },
    },
    cell: {
      linkCode: `${baseLink}/kui-cell`,
      showPath: {
        'base': 'cell/BaseCell',
        'slot': 'cell/SlotCell',
        'link-group-base': 'cell/LinkGroupBaseCell',
        'link-group-space': 'cell/LinkGroupSpaceCell',
        'left-icon': 'cell/LeftIconCell',
        'icon': 'cell/IconCell',
        'center': 'cell/CenterCell',
      },
    },
    image: {
      linkCode: `${baseLink}/kui-image`,
      showPath: {
        base: 'image/BaseImage',
        mode: 'image/ModeImage',
        radius: 'image/RadiusImage',
        error: 'image/ErrorImage',
        click: 'image/ClickImage',
        preview: 'image/PreviewImage',
        lazyload: 'image/LazyloadImage',
      },
    },
    icon: {
      linkCode: `${baseLink}/kui-icons`,
      showPath: {
        'base': 'icon/BaseIcon',
        'color': 'icon/ColorIcon',
        'size': 'icon/SizeIcon',
        'weight': 'icon/WeightIcon',
        'animation': 'icon/AnimationIcon',
        'class-animation': 'icon/ClassAnimationIcon',
        'custom': 'icon/CustomIcon',
        'iconfont': 'icon/IconfontIcon',
        'iconfont3': 'icon/Iconfont3Icon',
        'iconfont-css': 'icon/IconfontCssIcon',
        'iconfont-html': 'icon/IconfontHtmlIcon',
      },
    },
    tag: {
      linkCode: `${baseLink}/kui-tag`,
      showPath: {
        'type': 'tag/TypeTag',
        'plain': 'tag/PlainTag',
        'shape': 'tag/ShapeTag',
        'size': 'tag/SizeTag',
        'block': 'tag/BlockTag',
        'half-round': 'tag/HalfRoundTag',
        'closable': 'tag/ClosableTag',
        'loading': 'tag/LoadingTag',
        'checkable': 'tag/CheckableTag',
        'custom-color': 'tag/CustomColorTag',
        'slot': 'tag/SlotTag',
      },
    },
    badge: {
      linkCode: `${baseLink}/kui-badge`,
      showPath: {
        type: 'badge/TypeBadge',
        dot: 'badge/DotBadge',
        value: 'badge/ValueBadge',
        gradient: 'badge/GradientBadge',
        max: 'badge/MaxBadge',
        position: 'badge/PositionBadge',
        show: 'badge/ShowBadge',
        color: 'badge/ColorBadge',
        icon: 'badge/IconBadge',
      },
    },
    layout: {
      linkCode: `${baseLink}`,
      showPath: {
        base: 'layout/BaseLayout',
        gutter: 'layout/GutterLayout',
        flex: 'layout/FlexLayout',
      },
    },
    grid: {
      linkCode: `${baseLink}/kui-grid`,
      showPath: {
        'base': 'grid/BaseGrid',
        'columns': 'grid/ColumnsGrid',
        'gutter': 'grid/GutterGrid',
        'reverse': 'grid/ReverseGrid',
        'direction': 'grid/DirectionGrid',
        'icon-color-size': 'grid/IconColorSizeGrid',
        'slot': 'grid/SlotGrid',
      },
    },
    divider: {
      linkCode: `${baseLink}/kui-divider`,
      showPath: {
        'base': 'divider/BaseDivider',
        'dashed': 'divider/DashedDivider',
        'inset': 'divider/InsetDivider',
        'direction': 'divider/DirectionDivider',
        'slot': 'divider/SlotDivider',
        'text-direction': 'divider/TextDirectionDivider',
        'min-px': 'divider/MinPxDivider',
        'color-theme': 'divider/ColorThemeDivider',
      },
    },
    space: {
      linkCode: `${baseLink}/kui-space`,
      showPath: {
        'base': 'space/BaseSpace',
        'direction': 'space/DirectionSpace',
        'gap': 'space/GapSpace',
        'justify-end': 'space/JustifyEndSpace',
        'justify-space-around': 'space/JustifySpaceAroundSpace',
        'justify-center': 'space/JustifyCenterSpace',
        'justify-space-between': 'space/JustifySpaceBetweenSpace',
      },
    },
    sticky: {
      linkCode: `${baseLink}/kui-sticky`,
      showPath: {
        'base': 'sticky/BaseSticky',
        'top': 'sticky/TopSticky',
        'container': 'sticky/ContainerSticky',
        'bottom': 'sticky/BottomSticky',
        'container-ts': 'sticky/ContainerTsSticky',
      },
    },
    spin: {
      linkCode: `${baseLink}/kui-spin`,
      showPath: {
        'base': 'spin/BaseSpin',
        'theme': 'spin/ThemeSpin',
        'background-color': 'spin/BackgroundColorSpin',
        'size': 'spin/SizeSpin',
      },
    },
    overlay: {
      linkCode: `${baseLink}/kui-overlay`,
      showPath: {
        'base': 'overlay/BaseOverlay',
        'overlay-ness': 'overlay/OverlayNessOverlay',
        'content': 'overlay/ContentOverlay',
        'vnode': 'overlay/VnodeOverlay',
        'slot-default': 'overlay/SlotDefaultOverlay',
        'blur': 'overlay/BlurOverlay',
      },
    },
    animation: {
      linkCode: `${baseLink}/kui-animation`,
      showPath: {
        'base': 'animation/BaseAnimation',
        'duration': 'animation/DurationAnimation',
        'duration-unit': 'animation/DurationUnitAnimation',
        'timing-function': 'animation/TimingFunctionAnimation',
        'delay': 'animation/DelayAnimation',
        'delay-unit': 'animation/DelayUnitAnimation',
        'interation-count': 'animation/InterationCountAnimation',
        'infinite': 'animation/InfiniteAnimation',
        'direction': 'animation/DirectionAnimation',
        'fill-mode': 'animation/FillModeAnimation',
        'runing': 'animation/RuningAnimation',
        'demo': 'animation/DemoAnimation',
        'demo-ts': 'animation/DemoTsAnimation',
      },
    },
    collapse: {
      linkCode: `${baseLink}/kui-collapse`,
      showPath: {
        'base': 'collapse/BaseCollapse',
        'disabled': 'collapse/DisabledCollapse',
        'accordion': 'collapse/AccordionCollapse',
        'taped-state': 'collapse/TapedStateCollapse',
        'animation': 'collapse/AnimationCollapse',
        'colors': 'collapse/ColorsCollapse',
        'slots': 'collapse/SlotsCollapse',
      },
    },
    skeleton: {
      linkCode: `${baseLink}/kui-skeleton`,
      showPath: {
        'base': 'skeleton/BaseSkeleton',
        'title': 'skeleton/TitleSkeleton',
        'rows': 'skeleton/RowsSkeleton',
        'rows-round': 'skeleton/RowsRoundSkeleton',
        'avatar': 'skeleton/AvatarSkeleton',
        'card': 'skeleton/CardSkeleton',
        'layout': 'skeleton/LayoutSkeleton',
        'animate': 'skeleton/AnimateSkeleton',
        'animate-type': 'skeleton/AnimateTypeSkeleton',
      },
    },
    progress: {
      linkCode: `${baseLink}/kui-progress`,
      showPath: {
        'base': 'progress/BaseProgress',
        'width-color': 'progress/WidthColorProgress',
        'label': 'progress/LabelProgress',
        'label-inside': 'progress/LabelInsideProgress',
        'slot-label-inside': 'progress/SlotLabelInsideProgress',
        'active': 'progress/ActiveProgress',
        'icon-name': 'progress/IconNameProgress',
        'shape': 'progress/ShapeProgress',
        'demo': 'progress/DemoProgress',
      },
    },
    popup: {
      linkCode: `${baseLink}/kui-popup`,
      showPath: {
        'base': 'popup/BasePopup',
        'position': 'popup/PositionPopup',
        'radius-size': 'popup/RadiusSizePopup',
        'icon': 'popup/IconPopup',
        'close': 'popup/ClosePopup',
        'callback': 'popup/CallbackPopup',
      },
    },
    snackbar: {
      linkCode: `${baseLink}/kui-snackbar`,
      showPath: {
        'base': 'snackbar/BaseSnackbar',
        'type': 'snackbar/TypeSnackbar',
        'plain': 'snackbar/PlainSnackbar',
        'full': 'snackbar/FullSnackbar',
        'custom-style': 'snackbar/CustomStyleSnackbar',
        'content-center': 'snackbar/ContentCenterSnackbar',
        'position': 'snackbar/PositionSnackbar',
        'duration': 'snackbar/DurationSnackbar',
      },
    },
    actionsheet: {
      linkCode: `${baseLink}/kui-actionsheet`,
      showPath: {
        'base': 'actionsheet/BaseActionsheet',
        'cancel': 'actionsheet/CancelActionsheet',
        'title-desc': 'actionsheet/TitleDescActionsheet',
        'status': 'actionsheet/StatusActionsheet',
      },
    },
    dialog: {
      linkCode: `${baseLink}/kui-dialog`,
      showPath: {
        normal: 'dialog/NormalDialog',
        content: 'dialog/ContentDialog',
        type: 'dialog/TypeDialog',
        footer: 'dialog/FooterDialog',
      },
    },
    toast: {
      linkCode: `${baseLink}/kui-toast`,
      showPath: {
        base: 'toast/BaseToast',
        type: 'toast/TypeToast',
        overlay: 'toast/OverlayToast',
      },
    },
    switch: {
      linkCode: `${baseLink}/kui-switch`,
      showPath: {
        base: 'switch/BaseSwitch',
        disabled: 'switch/DisabledSwitch',
        loading: 'switch/LoadingSwitch',
        change: 'switch/ChangeSwitch',
        async: 'switch/AsyncSwitch',
        colors: 'switch/ColorsSwitch',
        text: 'switch/TextSwitch',
      },
    },
    radio: {
      linkCode: `${baseLink}/kui-radio`,
      showPath: {
        'base': 'radio/BaseRadio',
        'row': 'radio/RowRadio',
        'icon': 'radio/IconRadio',
        'icon-size': 'radio/IconSizeRadio',
        'icon-color': 'radio/IconColorRadio',
        'change': 'radio/ChangeRadio',
      },
    },
    checkbox: {
      linkCode: `${baseLink}/kui-checkbox`,
      showPath: {
        'base': 'checkbox/BaseCheckbox',
        'half': 'checkbox/HalfCheckbox',
        'disabled': 'checkbox/DisabledCheckbox',
        'icon-size': 'checkbox/IconSizeCheckbox',
        'icon': 'checkbox/IconCheckbox',
        'change': 'checkbox/ChangeCheckbox',
        'group-base': 'checkbox/GroupBaseCheckbox',
        'group-check': 'checkbox/GroupCheckCheckbox',
        'group-limit': 'checkbox/GroupLimitCheckbox',
        'half-demo': 'checkbox/HalfDemoCheckbox',
      },
    },
    input: {
      linkCode: `${baseLink}/kui-input`,
      showPath: {
        'base': 'input/BaseInput',
        'type': 'input/TypeInput',
        'disabled': 'input/DisabledInput',
        'icon': 'input/IconInput',
        'error': 'input/ErrorInput',
        'slot': 'input/SlotInput',
        'font-number': 'input/FontNumberInput',
        'align': 'input/AlignInput',
        'no-bottom-border': 'input/NoBottomBorderInput',
      },
    },
    stepper: {
      linkCode: `${baseLink}/kui-stepper`,
      showPath: {
        'base': 'stepper/BaseStepper',
        'step': 'stepper/StepStepper',
        'disabled': 'stepper/DisabledStepper',
        'disabled-input': 'stepper/DisabledInputStepper',
        'min-max': 'stepper/MinMaxStepper',
        'decimal-step': 'stepper/DecimalStepStepper',
        'decimal-places': 'stepper/DecimalPlacesStepper',
        'custom-style': 'stepper/CustomStyleStepper',
        'auto-hidden': 'stepper/AutoHiddenStepper',
        'disabled-change': 'stepper/DisabledChangeStepper',
      },
    },
    numberkeyboard: {
      linkCode: `${baseLink}/kui-numberkeyboard`,
      showPath: {
        'base': 'numberkeyboard/BaseNumberkeyboard',
        'random': 'numberkeyboard/RandomNumberkeyboard',
        'title': 'numberkeyboard/TitleNumberkeyboard',
        'idcard': 'numberkeyboard/IdcardNumberkeyboard',
        'desc': 'numberkeyboard/DescNumberkeyboard',
        'inputting': 'numberkeyboard/InputtingNumberkeyboard',
        'right-base': 'numberkeyboard/RightBaseNumberkeyboard',
        'right-random': 'numberkeyboard/RightRandomNumberkeyboard',
        'right-confirm-bg': 'numberkeyboard/RightConfirmBgNumberkeyboard',
        'right-confirm-text': 'numberkeyboard/RightConfirmTextNumberkeyboard',
        'right-title': 'numberkeyboard/RightTitleNumberkeyboard',
      },
    },
    picker: {
      linkCode: `${baseLink}/kui-picker`,
      showPath: {
        'single-base': 'picker/SingleBasePicker',
        'multicolumn-base': 'picker/MulticolumnBasePicker',
        'multicolumn-chain': 'picker/MulticolumnChainPicker',
        'multicolumn-default': 'picker/MulticolumnDefaultPicker',
        'loading-base': 'picker/LoadingBasePicker',
        'loading-icon': 'picker/LoadingIconPicker',
        'loading-async': 'picker/LoadingAsyncPicker',
      },
    },
    rate: {
      linkCode: `${baseLink}/kui-rate`,
      showPath: {
        base: 'rate/BaseRate',
        count: 'rate/CountRate',
        color: 'rate/ColorRate',
        icon: 'rate/IconRate',
        half: 'rate/HalfRate',
        size: 'rate/SizeRate',
        gap: 'rate/GapRate',
        disabled: 'rate/DisabledRate',
        readonly: 'rate/ReadonlyRate',
        change: 'rate/ChangeRate',
        rules: 'rate/RulesRate',
      },
    },
    slider: {
      linkCode: `${baseLink}/kui-slider`,
      showPath: {
        'base': 'slider/BaseSlider',
        'range': 'slider/RangeSlider',
        'show-range': 'slider/ShowRangeSlider',
        'disabled': 'slider/DisabledSlider',
        'readonly': 'slider/ReadonlySlider',
        'step': 'slider/StepSlider',
        'hidden-label': 'slider/HiddenLabelSlider',
        'hidden-active-ripple': 'slider/HiddenActiveRippleSlider',
        'theme-color': 'slider/ThemeColorSlider',
        'custom-style': 'slider/CustomStyleSlider',
        'slot': 'slider/SlotSlider',
        'change': 'slider/ChangeSlider',
        'rules': 'slider/RulesSlider',
      },
    },
    searchbar: {
      linkCode: `${baseLink}/kui-searchbar`,
      showPath: {
        'base': 'searchbar/BaseSearchBar',
        'event': 'searchbar/EventSearchBar',
        'show-lefticon': 'searchbar/ShowLefticonSearchBar',
        'input-align': 'searchbar/InputAlignSearchBar',
        'disabled': 'searchbar/DisabledSearchBar',
        'custom-style': 'searchbar/CustomStyleSearchBar',
        'show-all-icon': 'searchbar/ShowAllIconSearchBar',
        'click-input': 'searchbar/ClickInputSearchBar',
      },
    },
    shortpassword: {
      linkCode: `${baseLink}/kui-shortpassword`,
      showPath: {
        base: 'shortpassword/BaseShortPassword',
        length: 'shortpassword/LengthShortPassword',
        password: 'shortpassword/PasswordShortPassword',
        tips: 'shortpassword/TipsShortPassword',
      },
    },
    uploader: {
      linkCode: `${baseLink}/kui-uploader`,
      showPath: {
        'base': 'uploader/BaseUploader',
        'status': 'uploader/StatusUploader',
        'hidden-preview-image': 'uploader/HiddenPreviewImageUploader',
        'preview-image': 'uploader/PreviewImageUploader',
        'max-count': 'uploader/MaxCountUploader',
        'max-size': 'uploader/MaxSizeUploader',
        'upload-icon': 'uploader/UploadIconUploader',
        'custom-upload-style': 'uploader/CustomUploadStyleUploader',
        'preview-cover': 'uploader/PreviewCoverUploader',
        'auto-upload': 'uploader/AutoUploadUploader',
        'upload-icon-size': 'uploader/UploadIconSizeUploader',
        'before-upload': 'uploader/BeforeUploadUploader',
        'before-delete': 'uploader/BeforeDeleteUploader',
        'disabled': 'uploader/DisabledUploader',
        'preview-full-image': 'uploader/PreviewFullImageUploader',
        'custom-click-item': 'uploader/CustomClickItemUploader',
      },
    },
  }
}

export const mdConfig = () => {
  const baseLink = 'https://gitee.com/bad_-code/kviewui/tree/master/components'

  return {
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
  }
}

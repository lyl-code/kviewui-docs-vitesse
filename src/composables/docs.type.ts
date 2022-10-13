export default interface MdConfig {
  [key: string]: {
    linkCode: string
    showPath: {
      [key: string]: string
    }
  }
}

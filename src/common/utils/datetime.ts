/**
 * @zh 时间日期处理工具
 */

export const TimeUtils = {
  format(fmt, date: any = new Date()) {
    date = new Date(date);
    let ret;
    let opt = {
      'Y+': date.getFullYear().toString(), // 年
      'M+': (date.getMonth() + 1).toString(), // 月
      'D+': date.getDate().toString(), // 日
      'h+': date.getHours().toString(), // 时
      'm+': date.getMinutes().toString(), // 分
      's+': date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
      }
    }
    return fmt;
  },
  formatUTC: () => {
    let time = TimeUtils.format('YYYY-MM-DD hh:mm:ss',  new Date().getTime() - 8 * 3600 * 1000)
    time = time.replace(/\//g, '-')
    time = time.replace(' ', 'T')
    time = time + '.435Z' // .435z是仿带Z格式随意加上的，可以是任意三位数字加Z
    return time
  }
};
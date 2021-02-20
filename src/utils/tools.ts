import MD5 from 'crypto-js/md5';
type exportFileOption = {
  fileName: string;
};
declare var window: any;

/**
 * 导出Excel文件
 * @param data 二进制数据
 */
export function exportExcelFile(data: any, options: exportFileOption) {
  let date = new Date();
  const url = window.URL.createObjectURL(
    new Blob([data], { type: 'application/vnd.ms-excel' }),
  );
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute(
    'download',
    `${options.fileName}${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}.xls`,
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * 判断是正式环境还是测试环境
 */
export function isProdEnv() {
  return window._globalEnv === 'prod';
}

/**
 * 获取url参数
 * @param name 参数名字
 */
export function getUrlParam(name: string): any {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

/**
 * 不可选择时间 共场次使用
 */
export function disabledDefaultHousr() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 20, 21, 22, 23];
}

/**
 * 传入需要展示的时间 共场次使用
 * @param showHorse
 */
export function disableHours(showHorse: number[]): number[] {
  let hourseAry = Array.from(
    { length: 24 },
    (item: any, index: number) => index,
  );
  let showAry: number[] = [];
  if (showHorse && showHorse.length > 0) {
    showAry = hourseAry.filter((item: number, index: number) => {
      return !(showHorse as number[]).includes(item);
    });
  } else {
    showHorse = [0, 1, 2, 3, 4, 5, 6, 7, 8, 20, 21, 22, 23];
  }
  return showAry;
}
/**
 * 拼接get的参数
 * @param url 链接
 * @param payload 参数对象
 */
export function addUrlParam(url: string, payload: any) {
  Object.keys(payload).map((key: string) => {
    url =
      url + (url.indexOf('?') !== -1 ? '&' : '?') + key + '=' + payload[key];
  });
  return url;
}

/**
 * socket生成uuid
 */
export function getUuid() {
  var s: any[] = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  var uuid = s.join('');
  return uuid;
}

export function entryMd5(value: string) {
  return MD5(value).toString();
}

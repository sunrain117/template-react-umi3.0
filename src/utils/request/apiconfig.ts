import { getCookie } from '../cookie';
import { isProdEnv } from '../tools';

declare global {
  interface Window {
    userName: string; //oa名
    realName: string; //中文名
    systemName: string;
  }
}

window.userName = getCookie('userName') || 'liumin20';
window.realName = getCookie('realName') || '刘敏';
window.systemName = window.systemName || 'oms';

/**
 *
 * oms代理：//oms.58v5.cn/api
 * 本地：''
 */

const basePath = {
  oms: isProdEnv() ? window.location.origin : '',
  chuizi: isProdEnv()
    ? '//oms.youxinpai.com/proxy/hammer'
    : '//oms.58v5.cn/proxy/hammer', //oms.58v5.cn/proxy/hammer     mock数据：escapim.58corp.com/app/mock/360
  // buyer: isProdEnv()
  //   ? '//oms.youxinpai.com/proxy/buyer'
  //   : '//oms.58v5.cn/proxy/buyer', //oms.58v5.cn/proxy/buyer
  // chuizi: isProdEnv()
  //   ? '//oms.youxinpai.com/proxy/hammer'
  //   : '//escapim.58corp.com/app/mock/360', //oms.58v5.cn/proxy/hammer     mock数据：escapim.58corp.com/app/mock/360
  buyer: '/chuiziBuyerApi',
};

export default {
  oms: {
    /**
     * 根据用户展示左侧系统菜单
     */
    getMenuAction: {
      url: `${basePath.oms}/rbac/getMenuList`,
      method: 'GET',
      params: {
        system: window.systemName,
        userName: window.userName,
      },
    },
    /**
     * 根据用户获取权限树
     */
    getPowerTree: {
      url: `${basePath.oms}/rbac/getPowerTree`,
      method: 'GET',
      params: {
        system: 'oms',
        userName: window.userName,
      },
    },
  },
  chuizi: {
    /**
     * 获取场地列表
     */
    getMarketList: {
      url: `${basePath.chuizi}/hammerBase/marketList`,
      method: 'GET',
    },
    /**
     * 获取场次列表
     */
    getChangCiList: {
      url: `${basePath.chuizi}/getChangCiList`,
      method: 'POST',
    },
    /**
     * 获取场次信息接口
     */
    getChangCiInfo: {
      url: `${basePath.chuizi}/hammerBase/sceneInfo`,
      method: 'GET',
    },
    /**
     * 新增/修改场次
     */
    saveChangCi: {
      url: `${basePath.chuizi}/hammerBase/addOrUpdateScene`,
      method: 'POST',
    },
    /**
     * 获取新增场次车辆数和时间信息
     */
    getChangciBaseInfo: {
      url: `${basePath.chuizi}/hammerBase/getSceneBaseInfo`,
      method: 'GET',
    },
    /**
     * 获取历史车辆信息
     */
    getHistoryPublishInfoList: {
      url: `${basePath.chuizi}/getHistoryPublishInfoList`,
      method: 'POST',
    },
    /**
     * 导出历史场次数据
     */
    exportHistoryPublishInfoExcel: {
      url: `${basePath.chuizi}/exportHistoryPublishInfoExcel`,
      method: 'POST',
    },
    /**
     * 今日拍品列表
     */
    getDayAuctionList: {
      url: `${basePath.chuizi}/getDayAuctionList`,
      method: 'GET',
    },
    /**
     * 今日拍品导出
     */
    exportDayAutionDetailExcel: {
      url: `${basePath.chuizi}/exportDayAutionDetailExcel`,
      method: 'GET',
    },
    /**
     * 获取锤子发拍数据列表
     */
    getAuctionList: {
      url: `${basePath.chuizi}/getAuctionList`,
      method: 'POST',
    },
    /**
     * 锤子已发拍通道数据接口
     */
    getAuctionChannelNum: {
      url: `${basePath.chuizi}/hammerBase/getAuctionChannelNum`,
      method: 'GET',
    },
    /**
     * 取消发拍
     */
    unbind: {
      url: `${basePath.chuizi}/auction/unbind`,
      method: 'POST',
    },
    /**
     * 锤子一键发拍
     */
    publish: {
      url: `${basePath.chuizi}/auction/publish`,
      method: 'POST',
    },
    /**
     * 发拍进度
     */
    rate: {
      url: `${basePath.chuizi}/auction/rate`,
      method: 'GET',
    },
    /**
     * 下架
     */
    off: {
      url: `${basePath.chuizi}/auction/off`,
      params: {
        optName: window.userName,
      },
      method: 'POST',
    },
    /**
     * 修改起拍价
     */
    editstartprice: {
      url: `${basePath.chuizi}/auction/editstartprice`,
      params: {
        optUser: window.userName,
      },
      method: 'POST',
    },
    /**
     * 拍卖暂停
     */
    auctionControl: {
      url: `${basePath.chuizi}/auctionControl`,
      method: 'POST',
    },
    /**
     * 锤子已拍数据变更通道
     */
    updatePublishChannel: {
      url: `${basePath.chuizi}/updatePublishChannel`,
      method: 'POST',
    },
    /**
     * 锤子已发拍列表导出
     */
    exportPublishExcel: {
      url: `${basePath.chuizi}/exportPublishExcel`,
      method: 'GET',
    },
    /**
     * 锤子导入排序
     */
    importPublishOrderExcel: {
      url: `${basePath.chuizi}/importPublishOrderExcel`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    },

    /*********************************** 交易促进 ************************************/

    /**
     * 获取通道及汇总信息
     */
    getChannelInfo: {
      url: `${basePath.buyer}/promoteAuction/getChannelInfo`,
      method: 'POST',
    },
    /**
     * 拍品列表
     */
    getPublishAuctionList: {
      url: `${basePath.buyer}/promoteAuction/getAuctionList`,
      method: 'POST',
    },
    /**
     * 在拍拍品信息展示
     */
    getCurrentPublishInfo: {
      url: `${basePath.buyer}/promoteAuction/currentPublishInfo`,
      method: 'POST',
    },
    /**
     * 呼叫卖家
     */
    callCustomer: {
      url: `${basePath.buyer}/promoteAuction/callCustomer`,
      method: 'POST',
    },
    /**
     * 设置坐席号
     */
    setCno: {
      url: `${basePath.buyer}/promoteAuction/setCno`,
      method: 'POST',
    },
    /**
     * 壳切接口
     */
    tradepromotion: {
      url: `${basePath.buyer}/auction/tradepromotion`,
      method: 'POST',
    },
    /*
     * 交易促进获取场次列表
     */
    getChannelNames: {
      url: `${basePath.buyer}/promoteAuction/getChannelNames`,
      method: 'GET',
    },
    /**
     * 查询坐席号
     */
    getCnoByOaName: {
      url: `${basePath.buyer}/promoteAuction/getCnoByOaName`,
      method: 'GET',
    },
    /**
     * 获取tvaid列表
     */
    getTradePromotionTvaidList: {
      url: `${basePath.buyer}/promoteAuction/getTradePromotionTvaidList`,
      method: 'GET',
    },
    /************************************************ 交易促进 ending ************************************** */
  },
};

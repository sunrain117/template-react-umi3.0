
export default {
  namespace: 'index',
  state: {},
  effects: {
    *getMenuData({ payload }: any, { call, put, select }: any) {
    
    },
    *getMarketList({ payload }: any, { call, put, select }: any) {
    
    },
    *getPowerTree({ payload }: any, { call, put, select }: any) {
    
    },
  },
  reducers: {
    saveMenuData(state: any, { payload }: any) {
      return {
        ...state,
        menuData: payload,
      };
    },
    saveMarketList(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },
    savePowerTree(state: any, { payload }: any) {
      return {
        ...state,
        powerTree: {
          ...payload,
        },
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname, query }: any) => {
        // if (pathname === '/') {
        //   dispatch({ type: 'getMenuData', payload: query });
        //   dispatch({ type: 'getMarketList' });
        // }
        // dispatch({ type: 'getMenuData', payload: query });
        // dispatch({ type: 'getMarketList' })
      });
    },
  },
};

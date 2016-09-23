export const copyDashboard = (pageOid) => {
  return createMutateAction({
    component: clientMetricsCmp,
    description: 'copyDashboard',
    callAPI: (state) => {
      const params = {};
      if (pageOid && pageOid !== 'null') {
        params.oid = pageOid;
      }

      const contextPath = getContextPath(state);
      return AlmApi.request(`${contextPath}/copyCustomPage.sp`, params);
    },
    requestAction: () => dashboardCopyRequested({ pageOid }),
    successAction: (response, state) => {
      let result;
      try {
        result = JSON.parse(response.text);

        if (!result.copyWebTabOid || !result.copyWebTabName) {
          recordError(new TypeError(`Response object is missing the copyWebTab information`));
          return dashboardCopyReceivedFailure();
        }

        return (dispatch, getState) => {
          dispatch(customPageChanged({
            type: 'WebTab',
            oid: result.copyWebTabOid,
            name: result.copyWebTabName,
            created: true
          }));

          return dispatch(dashboardCopyReceived());
        };
      } catch (e) {
        return dashboardCopyReceivedFailure();
      }
    },
    failureAction: dashboardCopyReceivedFailure
  });
};

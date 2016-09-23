export const collapseProject = (projectOid: number) => (
  createMutateAction({
    component,
    description: 'collapseProject',
    shouldCallAPI: (state: Object): boolean => !!getProjectPrefIdFromOid(state, projectOid),
    callAPI: (state: Object) => {
      const projectPrefId = getProjectPrefIdFromOid(state, projectOid);
      if (!projectPrefId) {
        return Promise.reject(new Error(`project preference id not found`));
      }
      return AlmApi.request(getProjectUrl(state, projectPrefId), {}, {
        body: { Expanded: false },
        method: 'patch'
      });
    },
    requestAction: () => collapseProjectRequested({ ProjectOID: projectOid }),
    failureAction: () => collapseProjectFailure({ ProjectOID: projectOid }),
    successAction: (response: BespokeResponse) => collapseProjectSuccess(response)
  })
);

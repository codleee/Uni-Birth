import useAxiosInstance from "./useAxiosInstance";

const constellationsGetPlanet = async (planetId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/list/${planetId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetConstellation = async (constellationId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/${constellationId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetPin = async (constellationId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/pin/${constellationId}/${memberId}`,
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetAttendList = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/profiles/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetPinList = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/profiles/pins/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsPostConstellation = async (memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.post(
      `/constellations/register/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetDetail = async (constellationId) => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/detail/${constellationId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsGetTemplateList = async () => {
  try {
    const response = await useAxiosInstance.apiClient.get(
      `/constellations/templates`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const constellationsDeletePin = async (constellationId, memberId) => {
  try {
    const response = await useAxiosInstance.apiClient.delete(
      `/constellations/pin/${constellationId}/${memberId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  constellationsGetPlanet,
  constellationsGetConstellation,
  constellationsGetPin,
  constellationsGetAttendList,
  constellationsGetPinList,
  constellationsPostConstellation,
  constellationsGetDetail,
  constellationsGetTemplateList,
  constellationsDeletePin,
};

const FS_CLIENT = "BOKLBSA405VVTBJBRYXPUVIBARKGSHCIKX23JCBSZYOO25WY";
const FS_SECRET = "VMCWHSF3WDJPJP1FUHQCICHWGIAZGWM1XNQ3BHQJDKYB2RO5";
const API = "https://api.foursquare.com/v2";
const FS_VERSION = "20190224";
const RADIUS_M = 250;
const SEARCH_RESULTS = 1;

export const getSearchResult = (lat, lng, name) =>
  fetch(`${API}/venues/search?ll=${lat},${lng}&limit=${SEARCH_RESULTS}&radius=${RADIUS_M}&query=${name}
    	&client_id=${FS_CLIENT}&client_secret=${FS_SECRET}&v=${FS_VERSION}`)
    .then(response => response.json())
    .then(response => response.response.venues[0].id)
    .catch('error')
/**
*Use FourSquare id to return array of details about a place.
*/
export const getDetails = (id) =>
  fetch(`${API}/venues/${id}?&client_id=${FS_CLIENT}&client_secret=${FS_SECRET}&v=${FS_VERSION}`)
    .then(res => res.json())
    .catch('error')
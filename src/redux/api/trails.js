import axios from '../../utils/index';

export function allTrails() {
  const values = axios().get('/home');

  return values;
}

export function allTechnologies() {
  const values = axios().get('/technologies');

  return values;
}

export function trailsByTechnology(technology) {
  console.log(technology);
  const values = axios().get(`/trails/${technology}`);

  return values;
}

import axios from '../../utils/index';

export async function allTrails() {
  const values = await axios().get('/home');

  return values;
}

export async function allTechnologies() {
  const values = await axios().get('/technologies');

  return values;
}

export async function trailsByTechnology(technology) {
  const values = await axios().get(`/trails/tech/${technology}`);

  return values;
}

export async function myTrails({ userId }) {
  const values = await axios().get(`/users/trails/${userId}`);

  return values;
}

export async function getTrailById({ trailId }) {
  const values = await axios().get(`/trails/${trailId}`);

  return values;
}

export async function createTrail({ title, description, technologies }, userName) {
  const values = await axios().post('/trails', {
    description,
    technologies,
    title,
    userName,
  });

  return values;
}
export const ADD_THING = 'adding a thing';

export default function addThing(name) {
  console.log('triggering');
  return {
    type: ADD_THING,
    payload: {
      thing: name,
    },
  };
}

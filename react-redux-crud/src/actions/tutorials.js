import {
    CREATE_TUTORIAL, DELETE_TUTORIAL
    , DELETE_ALL_TUTORIALS, RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL
} from './types'
import tutorialService from '../services/tutorial.service'

export const createTutorial = (title, description) => async (dispatch) => {
    try {

        const res = await tutorialService.create({ title, description })
        dispatch({
            type: CREATE_TUTORIAL,
            payload: res.data
        })

        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error);
    }


}

export const retrieveTutorials = () => async (dispatch) => {
    try {
        const res = await tutorialService.getAll();

        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateTutorial = (id, data) => async (dispatch) => {
    try {
        const res = await tutorialService.update(id, data);

        dispatch({
            type: UPDATE_TUTORIAL,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteTutorial = (id) => async (dispatch) => {
    try {
        await tutorialService.delete(id);

        dispatch({
            type: DELETE_TUTORIAL,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllTutorials = () => async (dispatch) => {
    try {
        const res = await tutorialService.deleteAll();

        dispatch({
            type: DELETE_ALL_TUTORIALS,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const findTutorialsByTitle = (title) => async (dispatch) => {
    try {
        const res = await tutorialService.findByTitle(title);

        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
const {
    TREE_LOADED, TREE_LOAD_ERROR, CLOSE_TREE
} = require('../actions/siraTree');

const assign = require('object-assign');

const initialState = {
    treeData: []
};

function siraTree(state = initialState, action) {
    switch (action.type) {
        case TREE_LOADED: {
            return assign({}, state, {
                treeData: action.treeData,
                show: 'block'
            });
        }
        case TREE_LOAD_ERROR: {
            return assign({}, state, {
                loadingTreeError: action.error
            });
        }
        case CLOSE_TREE: {
            return assign({}, state, {
                treeData: [],
                show: 'none'
            });
        }
        default:
            return state;
    }
}

module.exports = siraTree;

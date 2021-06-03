const SET_ITEMS = "SET_ITEMS";
const SET_FIRST_PAGE_ITEMS = "SET_FIRST_PAGE_ITEMS";

const SET_PREVIEW_ITEMS = "SET_PREVIEW_ITEMS";

const SET_CATEGORY_TABLE_ITEMS = "SET_CATEGORY_TABLE_ITEMS";
const SET_SEARCH_TABLE_ITEMS = "SET_SEARCH_TABLE_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const ADD_NEW_TABLE_ITEM = "ADD_NEW_TABLE_ITEM";
const DELETE_TABLE_ITEM = "DELETE_TABLE_ITEM";
const UPDATE_TABLE_ITEM = "UPDATE_TABLE_ITEM";

const SET_ROOMS = "SET_ROOMS";
const SET_INITIAL_STATE = "SET_INITIAL_STATE";


let initialState = {
    items: [],
    previewItems: [],
    previewTotal: [],
    rooms: [],
    search: ''
}

const tableItemsReducer = (state = initialState, action) => {
    // console.log(action.type)
    // console.log(action)
    switch (action.type) {
        case SET_ITEMS:           
            console.log(action.items) 



            // function removeDuplicates(arr) {

            //     const result = [];
            //     const duplicatesIndices = [];
            
            //     // Перебираем каждый элемент в исходном массиве
            //     arr.forEach((current, index) => {
                
            //         if (duplicatesIndices.includes(index)) return;
                
            //         result.push(current);
                
            //         // Сравниваем каждый элемент в массиве после текущего
            //         for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {
                    
            //             const comparison = arr[comparisonIndex];
            //             const currentKeys = Object.keys(current);
            //             const comparisonKeys = Object.keys(comparison);
                        
            //             // Проверяем длину массивов
            //             if (currentKeys.length !== comparisonKeys.length) continue;
                        
            //             // Проверяем значение ключей
            //             const currentKeysString = currentKeys.sort().join("").toLowerCase();
            //             const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
            //             if (currentKeysString !== comparisonKeysString) continue;
                        
            //             // Проверяем индексы ключей
            //             let valuesEqual = true;
            //             for (let i = 0; i < currentKeys.length; i++) {
            //                 const key = currentKeys[i];
            //                 if ( current[key] !== comparison[key] ) {
            //                     valuesEqual = false;
            //                     break;
            //                 }
            //             }
            //             if (valuesEqual) duplicatesIndices.push(comparisonIndex);
                        
            //         } // Конец цикла
            //     });  
            //     console.log(result)
            //     return result;
            // }
            // removeDuplicates(action.items)


            return { ...state, items: [...state.items, ...action.items] }

        case SET_PREVIEW_ITEMS:
            console.log(action.items)
            return { ...state, previewItems: [...action.items], previewTotal: action.total }

        case SET_FIRST_PAGE_ITEMS:
            console.log(action.items)
            return { ...state, items: [...action.items] }

        case SET_INITIAL_STATE:
            console.log(action.items)
            return { ...state, items: [], rooms: [] }


        case SET_ROOMS:
            console.log(action.rooms)
            return { ...state, rooms: [...action.rooms] }



        case SET_CATEGORY_TABLE_ITEMS:
                console.log(action.items)
                return { ...state, items: [...action.items] }

        case SET_SEARCH_TABLE_ITEMS:
                console.log(action.items)
                return { ...state, items: [...action.items], search:action.searchString }


        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case ADD_NEW_TABLE_ITEM:
            console.log("new item")
            return { ...state, items: [action.item, ...state.items] }

        case DELETE_TABLE_ITEM:
            const deletedItemId = action.itemId
            const deletedItem = [...state.items].find(item => item.id === deletedItemId)
            const deletedItemIndex = state.items.indexOf(deletedItem)
            const updatedItemsWithoutDeleted = [
                ...state.items.slice(0, deletedItemIndex),
                ...state.items.slice(deletedItemIndex + 1, state.items.length)
            ]
            return { ...state, items: [...updatedItemsWithoutDeleted] }

        // case DELETE_TABLE_ITEM:
        //     const deletedItemId = action.itemId
        //     const deletedItem = [...state.items].find(item => item.id === deletedItemId)
        //     const deletedItemIndex = state.items.indexOf(deletedItem)
        //     const updatedItemsWithoutDeleted = [
        //         ...state.items.splice(deletedItemIndex, 0)
        //     ]

        //     console.log(updatedItemsWithoutDeleted)
        //     return { ...state }

        case UPDATE_TABLE_ITEM:
            const updatedItemId = action.item.id
            const updatedItem = [...state.items].find(item => item.id === updatedItemId)
            const updatedItemIndex = state.items.indexOf(updatedItem)
            console.log("update")
            const updatedItems= [
                ...state.items.slice(0, updatedItemIndex),
                action.item,
                ...state.items.slice(updatedItemIndex + 1, state.items.length)
            ]

            console.log(updatedItems)

            return { ...state, items: [...updatedItems] }
        default:
            return state
    }
}

export const setTableItems = (items, categoryId) => ({ type: SET_ITEMS, items, categoryId });
export const setFirstPageTableItems = (items) => ({ type: SET_FIRST_PAGE_ITEMS, items });
export const setPreviewTableItems = (items, total) => ({ type: SET_PREVIEW_ITEMS, items, total });


export const setCategoryTableItems = (items) => ({ type: SET_CATEGORY_TABLE_ITEMS, items });
export const setSearchTableItems = (items, searchString) => ({ type: SET_SEARCH_TABLE_ITEMS, items, searchString});
export const addTableItem = (item) => ({ type: ADD_NEW_TABLE_ITEM, item });
export const updateTableItem = (item) => ({ type: UPDATE_TABLE_ITEM, item });
export const deleteTableItem = (itemId) => ({ type: DELETE_TABLE_ITEM, itemId });
export const addNewTableItem = (item) => (dispatch) => { dispatch(addTableItem(item)) };
export const setInitialState = () => ({ type: SET_INITIAL_STATE });
export const setRooms = (rooms) => ({ type: SET_ROOMS, rooms });

export default tableItemsReducer
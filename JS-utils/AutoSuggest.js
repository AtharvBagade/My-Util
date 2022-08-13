
//Search function which returns values similar to the object properties mentioned in the search Params


const query = "";
const searchParam = ["id","name"];

function search(items) {
    console.log(items);
    return items.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        });
    });
}

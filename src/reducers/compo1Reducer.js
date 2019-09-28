

const compo1Reducer = (comp1 =10, action) => {
    switch (action.type) {

        case "COMPONENT1":
            return comp1 + action.payLoad
        default:
            return comp1
    }

}

export default compo1Reducer;

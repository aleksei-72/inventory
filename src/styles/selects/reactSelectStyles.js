export const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 2,
        position: 'absolute',
        right: 15,
        top: 35,
        width: 85,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    menuList: () => ({
        color: '#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    placeholder: () => ({
        color: '#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),

    singleValue: () => ({
        fontSize: 14
    }),


    dropdownIndicator: () => ({
        color: '#282828',
        position: 'absolute',
        top: 17,
        right: 20
    }),

    control: (_, { selectProps: { width } }) => ({
        width: 90,
        height: 35,
        margin: 10,
        marginLeft: -7,
    })
}


export const customUsersSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 2,
        position: 'absolute',
        right: 20,
        top: 35,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    placeholder: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    menuList: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    singleValue: () => ({
        fontSize: 14
    }),
    dropdownIndicator: () => ({
        color:'#282828',
        position: 'absolute',
        top: 7,
        right: 20
    }),

    control: (_, { selectProps: { width } }) => ({
        width: 165,
        height: 25,
        marginLeft: 10,
    })
}

export const customRoomsSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 2,
        position: 'absolute',
        right: 20,
        top: 35,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    menuList: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    placeholder: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),

    singleValue: () => ({
        fontSize: 14
    }),
    dropdownIndicator: () => ({
        color:'#282828',
        position: 'absolute',
        top: 7,
        right: 10
    }),

    control: (_, { selectProps: { width } }) => ({
        width: 175,
        height: 25,
        marginLeft: 10,
    }),
}

export const customCategoriesSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 2,
        position: 'absolute',
        right: 20,
        top: 35
    }),
    placeholder: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    menuList: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    singleValue: () => ({
        fontSize: 14
    }),
    dropdownIndicator: () => ({
        color:'#282828',
        position: 'absolute',
        top: 7,
        right: 20
    }),

    control: (_, { selectProps: { width } }) => ({
        width: 145,
        height: 35,
        marginLeft: -10,
        hyphens: 'auto'
    }),

}

export const customStatusStyles = {
    ...customStyles,
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 2,
        position: 'absolute',
        right: 15,
        top: 35,
        width: 140,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    control: (_, { selectProps: { width } }) => ({
        width: 140,
        height: 35,
        margin: 10,
        marginLeft: -7,
        // border: '1px solid #000'
    }),
}

export const customUsersReportSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        // color: state.selectProps.menuColor,
        color: '#282828',
        padding: 2,
        position: 'absolute',
        width: 230,
        // right: 20,
        // top: 35
    }),
    menuList: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    placeholder: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),

    singleValue: () => ({
        color: '#282828',
        fontSize: 14
    }),
    dropdownIndicator: () => ({
        color: '#282828',
        position: 'absolute',
        top: 6,
        right: 10
    }),

    control: (_, { selectProps: { width } }) => ({
        width: 230,
        height: 35,
        // marginRight: 8,
        border: "1px solid #D1D1D1",
        borderRadius: "3px"
    })
}

export const customCategoriesReportSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: '#282828',
        padding: 2,
        position: 'absolute',
        width: 145
    }),
    menuList: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    placeholder: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),

    singleValue: () => ({
        color: '#282828',
        fontSize: 14
    }),
    dropdownIndicator: () => ({
        color: '#282828',
        position: 'absolute',
        top: 6,
        right: 10
    }),

    control: (_, { selectProps: { width } }) => ({
        width: 145,
        height: 35,
        // marginLeft: -10,
        hyphens: 'auto',
        border: "1px solid #D1D1D1",
        borderRadius: "3px"
        // border: '1px solid #000'
    })
}
export const customColumnsReportSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: '#282828',
        padding: 2,
        position: 'absolute',
        width: "500px",
        // right: 20,
        // top: 35
    }),
    menuList: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    placeholder: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),

    singleValue: () => ({
        color: '#282828',
        fontSize: 14
    }),
    dropdownIndicator: () => ({
        color: '#282828',
        position: 'absolute',
        top: 8,
        right: 10
    }),
    indicatorContainer: () => ({
        color: '#282828'
    }),
    control: (_, { selectProps: { width } }) => ({
        width: "500px",
        height: 35,
        margin: "0px auto",
        hyphens: 'auto',
        border: "1px solid #D1D1D1",
        borderRadius: "3px"
    }),
    indicatorsContainer: () => ({
        position: "absolute",
        width: 66,
        display: "flex",
        justifyContent: "space-between",
        right: 0,
        top: 0
    })
}

export const customRoomsReportSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: '#282828',
        padding: 2,
        position: 'absolute',
        width: 115,
        // right: 20,
        // top: 35
    }),
    menuList: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),
    placeholder: () => ({
        color:'#282828',
        fontSize: 14,
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "19px"
    }),

    singleValue: () => ({
        color: '#282828',
        fontSize: 14
    }),
    dropdownIndicator: () => ({
        color: '#282828',
        position: 'absolute',
        top: 6,
        right: 10
    }),

    control: (_, { selectProps: { width } }) => ({
        width: 115,
        height: 35,
        // marginRight: 8,
        border: "1px solid #D1D1D1",
        borderRadius: "3px"
    }),
}
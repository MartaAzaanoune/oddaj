import React from "react";
const data = {
    "fundation": [
      { "name": "Fundacja słonce",
        "description": "jakaś organizacja",
        "id": 1},
      { "name": "Fundacja księzyc",
        "description": "jakaś organizacja",
        "id": 2},
      { "name": "Fundacja gwiazdy",
        "description": "jakaś organizacja",
        "id": 3},
      { "name": "Fundacja niebo",
        "description": "jakaś organizacja",
        "id": 4},
      { "name": "Fundacja planeta",
        "description": "jakaś organizacja",
        "id": 5},
      { "name": "Fundacja galaktyka",
        "description": "jakaś organizacja",
        "id": 6}
    ],
    "organization": [
      { "name": "Organizacja1",
        "description": "jakaś organizacja",
        "id": 7},
      { "name": "Organizacja2",
        "description": "jakaś organizacja",
        "id": 8},
      { "name": "Organizacja3",
        "description": "jakaś organizacja",
        "id": 9},
      { "name": "Organizacja4",
        "description": "jakaś organizacja",
        "id": 10},
      { "name": "Organizacja5",
        "description": "jakaś organizacja",
        "id": 11},
      { "name": "Organizacja6",
        "description": "jakaś organizacja",
        "id": 12}
    ],
    "local": [
      { "name": "zbiórka1",
      "description": "jakaś zbiórka"},
      { "name": "zbiórka2",
        "description": "jakaś zbiórka"},
      { "name": "zbiórka3",
        "description": "jakaś zbiórka"}
    ]
  }

export default class WhoWeHelp extends React.Component {
    constructor() {
        super();
        this.state = {
            items:data,
            currentPage: 1,
            itemsPerPage: 3,
            selected: 'fundation'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
       /* fetch('http://localhost:3000')
            .then(res => res.json())
            .then(items => {
                this.setState({
                    items
                })
            })*/
            this.setState({
                items: data
            })
    }


    render() {
        const { items, selected, currentPage, itemsPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastFundation = currentPage * itemsPerPage;
        const indexOfFirstFundation = indexOfLastFundation - itemsPerPage;
        const currentFundations = items[selected].slice(indexOfFirstFundation, indexOfLastFundation);
        const renderItems = currentFundations.map((item, index) => {
          console.log(item);
            return <li key={index}>{item.name}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items[selected].length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <button>f</button>
                <button>o</button>
                <button>l</button>
                <ul>
                    {renderItems}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}



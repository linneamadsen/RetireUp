import React, {Component} from 'react';
import './index.css';
import './App.css';
import Slider from './slider';
import Range from './slider';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';



class SP500 extends Component {

  constructor(props) {
        super(props)

        this.state = {
           sp500data: [
              { Year: 1926, amount: 37.49, cumulative: 37.49 },
              { Year: 1927, amount: 11.62, cumulative: 49.11 },
              { Year: 1928, amount: 43.61, cumulative: 92.72 },
              { Year: 1929, amount: -8.42, cumulative: 84.30 },
              { Year: 1930, amount: -24.90, cumulative: 59.40 },
              { Year: 1931, amount: -43.34, cumulative: 16.06 },
              { Year: 1932, amount: -8.19, cumulative: 7.87 },
              { Year: 1933, amount: 53.99, cumulative: 61.86 },
              { Year: 1934, amount: -1.44, cumulative: 60.42 },
              { Year: 1935, amount: 47.67, cumulative: 108.09 },
              { Year: 1936, amount: 33.92, cumulative: 142.01 },
              { Year: 1937, amount: -35.03, cumulative: 106.98 },
              { Year: 1938, amount: 31.12, cumulative: 138.10 },
              { Year: 1939, amount: -0.41, cumulative: 137.69 },
              { Year: 1940, amount: -9.78, cumulative: 127.91 },
              { Year: 1941, amount: -11.59, cumulative: 116.32 },
              { Year: 1942, amount: 20.34, cumulative: 136.66 },
              { Year: 1943, amount: 25.90, cumulative: 162.56 },
              { Year: 1944, amount: 19.75, cumulative: 182.31 },
              { Year: 1945, amount: 36.44, cumulative: 218.75 },
              { Year: 1946, amount: -8.07, cumulative: 210.68 },
              { Year: 1947, amount: 5.71, cumulative: 216.39 },
              { Year: 1948, amount: 5.50, cumulative: 221.89 },
              { Year: 1949, amount: 18.79, cumulative: 240.68 },
              { Year: 1950, amount: 31.71, cumulative: 272.39 },
              { Year: 1951, amount: 24.02, cumulative: 296.41 },
              { Year: 1952, amount: 18.37, cumulative: 314.78 },
              { Year: 1953, amount: -0.99, cumulative: 313.79 },
              { Year: 1954, amount: 52.62, cumulative: 366.41 },
              { Year: 1955, amount: 31.56, cumulative: 397.97 },
              { Year: 1956, amount: 6.56, cumulative: 404.53 },
              { Year: 1957, amount: -10.78, cumulative: 393.75 },
              { Year: 1958, amount: 43.36, cumulative: 437.11 },
              { Year: 1959, amount: 11.96, cumulative: 449.07 },
              { Year: 1960, amount: 0.47, cumulative: 449.54 },
              { Year: 1961, amount: 26.89, cumulative: 476.43 },
              { Year: 1962, amount: -8.73, cumulative: 467.70 },
              { Year: 1963, amount: 22.80, cumulative: 490.50 },
              { Year: 1964, amount: 16.48, cumulative: 506.98 },
              { Year: 1965, amount: 12.45, cumulative: 519.43 },
              { Year: 1966, amount: -10.06, cumulative: 509.37 },
              { Year: 1967, amount: 23.98, cumulative: 533.35 },
              { Year: 1968, amount: 11.06, cumulative: 544.41 },
              { Year: 1969, amount: -8.50, cumulative: 535.91 },
              { Year: 1970, amount: 4.01, cumulative: 539.92 },
              { Year: 1971, amount: 14.31, cumulative: 554.23 },
              { Year: 1972, amount: 18.98, cumulative: 573.21 },
              { Year: 1973, amount: -14.66, cumulative: 558.55 },
              { Year: 1974, amount: -26.47, cumulative: 532.08 },
              { Year: 1975, amount: 37.20, cumulative: 569.28 },
              { Year: 1976, amount: 23.84, cumulative: 593.12 },
              { Year: 1977, amount: -7.18, cumulative: 585.94 },
              { Year: 1978, amount: 6.56, cumulative: 592.50 },
              { Year: 1979, amount: 18.44, cumulative: 610.94 },
              { Year: 1980, amount: 32.42, cumulative: 643.36 },
              { Year: 1981, amount: -4.91, cumulative: 638.45 },
              { Year: 1982, amount: 21.55, cumulative: 660.00 },
              { Year: 1983, amount: 22.56, cumulative: 682.56 },
              { Year: 1984, amount: 6.27, cumulative: 688.83 },
              { Year: 1985, amount: 31.73, cumulative: 720.56 },
              { Year: 1986, amount: 18.67, cumulative: 739.23 },
              { Year: 1987, amount: 5.25, cumulative: 744.48 },
              { Year: 1988, amount: 16.61, cumulative: 761.09 },
              { Year: 1989, amount: 31.69, cumulative: 792.78 },
              { Year: 1990, amount: -3.10, cumulative: 789.68 },
              { Year: 1991, amount: 30.47, cumulative: 820.15 },
              { Year: 1992, amount: 7.62, cumulative: 827.77 },
              { Year: 1993, amount: 10.08, cumulative: 837.85 },
              { Year: 1994, amount: 1.32, cumulative: 839.17 },
              { Year: 1995, amount: 37.58, cumulative: 876.75 },
              { Year: 1996, amount: 22.96, cumulative: 899.71 },
              { Year: 1997, amount: 33.36, cumulative: 933.07 },
              { Year: 1998, amount: 28.58, cumulative: 961.65 },
              { Year: 1999, amount: 21.04, cumulative: 982.69 },
              { Year: 2000, amount: -9.10, cumulative: 973.59 },
              { Year: 2001, amount: -11.89, cumulative: 961.70 },
              { Year: 2002, amount: -22.10, cumulative: 939.60 },
              { Year: 2003, amount: 28.68, cumulative: 968.28 },
              { Year: 2004, amount: 10.88, cumulative: 979.16 },
              { Year: 2005, amount: 4.91, cumulative: 984.07 },
              { Year: 2006, amount: 15.79, cumulative: 999.86 },
              { Year: 2007, amount: 5.49, cumulative: 1005.35 },
              { Year: 2008, amount: -37.00, cumulative: 968.35 },
              { Year: 2009, amount: 26.46, cumulative: 994.81 },
              { Year: 2010, amount: 15.06, cumulative: 1009.87 },
              { Year: 2011, amount: 2.11, cumulative: 1011.98 },
              { Year: 2012, amount: 16.00, cumulative: 1027.98 },
              { Year: 2013, amount: 32.39, cumulative: 1060.37 },
              { Year: 2014, amount: 13.69, cumulative: 1074.06 },
              { Year: 2015, amount: 1.38, cumulative: 1075.44 },
              { Year: 2016, amount: 11.96, cumulative: 1087.40 },
              { Year: 2017, amount: 21.83, cumulative: 1109.23 },
              { Year: 2018, amount: -4.38, cumulative: 1104.85 },
              { Year: 2019, amount: 31.49, cumulative: 1136.34 },
              { Year: 2020, amount: 0.89, cumulative: 1137.23 }
           ]
        }
     }
     renderTableHeader() {

       let header = Object.keys(this.state.sp500data[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }

     renderTableData() {
       let cumulative_calculated = 0

       return this.state.sp500data.map((rowofdata, index) => {
          const { Year, amount, cumulative } = rowofdata
          cumulative_calculated += amount

          return (
             <tr key={Year}>
                <td>{Year}</td>
                <td>{amount}</td>
                <td>{Number.parseFloat(cumulative_calculated).toFixed(2)}</td>
             </tr>
          )
       })
    }

  render () {

    return (

      <div>
            <h3 className="SP500-header">S&P 500 Total Returns by Year</h3>
            <table id='students'>
               <tbody>
                  <tr >{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>

    )
  }
};

export default SP500;

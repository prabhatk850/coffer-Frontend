import React, { useEffect, useState } from "react";
import { getData } from "../../Services/service";
import styled from "styled-components";
import Barchart from "../../Chart/barchat";
import Linechart from "../../Chart/linechart";
import Polarchart from "../../Chart/polarareachart";
import Doughnutchart  from "../../Chart/Doughnutchart";
import Radarchart from "../../Chart/Radarchart";
import Piechart from "../../Chart/Piechart";



function HomePage({filter}) {
  const [data, setDataa] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setDataa(res.data);
    });
  }, []);
  const labels = data?.map((e) => {
    console.log("first", e[filter]);
    return e[filter];
  });
 
  const Data = {
    labels: labels,
    datasets: [
      {
        label: "Intensity",
        backgroundColor: "#7366F0",
        data: data?.map((e) => {
          return e.intensity;
        }),
      },
      {
        label: "Relevance",
        backgroundColor: "#FF9E43",
        data: data?.map((e) => {
          return e.relevance;
        }),
      },
      {
        label: "Likelihood",
        backgroundColor: "#29C76F",
        color:"white",
        data: data?.map((e) => {
          return e.likelihood;
        }),
      },
      {
        label: "Country",
        backgroundColor: "#FF9E43",
        data: data?.map((e) => {
          return e.country;
        }),
      },
    ],
  };

  const Data2 = {
    labels: labels,
    datasets: [
      {
        label: "Year",
        backgroundColor: "#7366F0",
        data: data?.map((e) => {
          return e.start_year;
        }),
      },
     {
        label: "Topics",
        backgroundColor: "#29C76F",
        color:"white",
        data: data?.map((e) => {
          return e.topic;
        }),
      },
      {
        label: "region",
        backgroundColor: "#7366F0",
        data: data?.map((e) => {
          return e.region;
        }),
      },
      
    ],
  };

 

  const Wrapper = styled.div`
  height: 750px;
  padding-bottom: 10px;
  overflow-y: scroll;
    @media (max-width: 767px) {
      padding-left: 5px;
      height: auto;
      display: block;
    }
  `;


  const ChartFlex = styled.div`
    padding-left: 10px;
    display: flex;
    display: 100%;
    justify-content: space-between;
    @media (max-width: 767px) {
      display: block;
      padding-left: 0;
    }
  `;
  const Div = styled.div`
    color: White;
    font-size: 30px;
    font-weight: 500;
    margin:10px 10px;
    padding: 10px;
    padding-right: 20px;
    margin-bottom: 10px;
    width: 550px;
    border: 1px solid gray;
    border-radius: 15px;

    @media (max-width: 767px) {
      width: 350px;
      
      
    }
  `;

  return (
    <Wrapper>
        
          <ChartFlex>
            <Div>
              Bar Graph
              <Barchart data={Data} />
            </Div>
            <Div>
              Line Graph
              <Linechart data={Data} />
            </Div>
          </ChartFlex>

          <ChartFlex>
            <Div>
              PolarArea Chart
              <Polarchart data={Data2} />
            </Div>
            <Div>
              Doughnut Chart
              <Doughnutchart data={Data} />
            </Div>
          </ChartFlex>

          <ChartFlex>
            <Div>
              Pie chart
              <Piechart data={Data2} />
            </Div>
            <Div>
              Radar Chart
              <Radarchart data={Data2} />
            </Div>
          </ChartFlex>
          
    </Wrapper>
  );
}

export default HomePage;

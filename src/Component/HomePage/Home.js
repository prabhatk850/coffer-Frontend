import React, { useEffect, useState } from "react";
import { getData } from "../../Services/service";
import styled from "styled-components";
import Barchart from "../../Chart/barchat";
import Linechart from "../../Chart/linechart";
import Polarchart from "../../Chart/polarareachart";
import Doughnutchart  from "../../Chart/Doughnutchart";
import Radarchart from "../../Chart/Radarchart";
import Piechart from "../../Chart/Piechart";


function HomePage() {
  const [data, setDataa] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setDataa(res.data);
    });
  }, []);

  const labels = data?.map((e) => {
    console.log("first", e.source);
    return e.source;
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
    ],
  };
  const Wrapper = styled.div`
    background-color: #2f334a;
    overflow-y: scroll; 
    @media (max-width: 767px) {
      width: 100vw;
    }
  `;

  const Charts = styled.div`
  
  
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
              <Polarchart data={Data} />
            </Div>
            <Div>
              Doughnut Chart
              <Doughnutchart data={Data} />
            </Div>
          </ChartFlex>

          <ChartFlex>
            <Div>
              Bubble chart
              <Piechart data={Data} />
            </Div>
            <Div>
              Radar Chart
              <Radarchart data={Data} />
            </Div>
          </ChartFlex>
        
    </Wrapper>
  );
}

export default HomePage;

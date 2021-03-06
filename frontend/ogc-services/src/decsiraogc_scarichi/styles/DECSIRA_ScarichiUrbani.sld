<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xmlns:decsiraogc_scarichi="http://www.regione.piemonte.it/ambiente/decsiraogc_scarichi/1.0"
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 

  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>square</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Punti scarico acque refle urbane</Title>
      <Abstract></Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
     <FeatureTypeStyle>

               
      
<!-- acque superficiali   -->      
	  <Rule>
	    <Name>R1</Name>
         <Title> Recapito in corpo idrico superficiale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_scarichi:desTipoRecettore</ogc:PropertyName>
              <ogc:Literal>acque superficiali</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
    <!--      <MaxScaleDenominator>500000</MaxScaleDenominator>  -->      
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
				  <CssParameter name="fill">#5500ff</CssParameter>
                </Fill>
                <Stroke>
                   <CssParameter name="stroke">#000000</CssParameter>
				   <CssParameter name="stroke-width">0.5</CssParameter>
                </Stroke>
              </Mark>
              <Size>10.5</Size>
            </Graphic>
          </PointSymbolizer>
		  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#5500ff</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>6.5</Size>
            </Graphic>
          </PointSymbolizer>
	   </Rule>
		  
      
     <!-- suolo-strati superficiali del sottosuolo     -->      
	  <Rule>
	    <Name>R2</Name>
         <Title> Recapito in suolo-strati superficiali del sottosuolo</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_scarichi:desTipoRecettore</ogc:PropertyName>
              <ogc:Literal>suolo-strati superficiali del sottosuolo</ogc:Literal>
            </ogc:PropertyIsEqualTo>
           </ogc:Filter>
           <!--      <MaxScaleDenominator>500000</MaxScaleDenominator>  -->      
  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
				  <CssParameter name="fill">#ffffff</CssParameter>
                </Fill>
                <Stroke>
                   <CssParameter name="stroke">#000000</CssParameter>
				   <CssParameter name="stroke-width">0.5</CssParameter>
                </Stroke>
              </Mark>
              <Size>10.5</Size>
            </Graphic>
          </PointSymbolizer>
		  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#ffffff</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>6.5</Size>
            </Graphic>
          </PointSymbolizer>        
		 </Rule> 
		 
		 
		<!-- recettore non indicato is null  -->      
	  <Rule>
	    <Name>R3</Name>
         <Title> Non disponibile</Title>
          <ogc:Filter>
              <ogc:PropertyIsNull>
                <ogc:PropertyName>decsiraogc_scarichi:desTipoRecettore</ogc:PropertyName>
              </ogc:PropertyIsNull>
            </ogc:Filter>
    <!--      <MaxScaleDenominator>500000</MaxScaleDenominator>  -->      
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#ffbf00</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">0.5</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>
       </Rule>	 
    </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
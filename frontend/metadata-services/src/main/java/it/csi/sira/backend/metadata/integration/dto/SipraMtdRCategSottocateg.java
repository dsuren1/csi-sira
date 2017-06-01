/*
 * Created on 8 nov 2016 ( Time 16:16:32 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package it.csi.sira.backend.metadata.integration.dto;

import java.io.Serializable;


/**
 * Java bean for 'SipraMtdRCategSottocateg' entity
 * 
 * @author Telosys Tools
 *
 */
public class SipraMtdRCategSottocateg implements Serializable {

    private static final long serialVersionUID = 1L;

    //----------------------------------------------------------------------
    // ENTITY PRIMARY KEY ( BASED ON A SINGLE FIELD )
    //----------------------------------------------------------------------
    // DB : id_categoria int4 
    private Integer idCategoria;
    // DB : id_sottocategoria int4 
    private Integer idSottocategoria;

    //----------------------------------------------------------------------
    // ENTITY DATA FIELDS 
    //----------------------------------------------------------------------    


    //----------------------------------------------------------------------
    // GETTER & SETTER FOR THE KEY FIELD
    //----------------------------------------------------------------------
    public void setIdCategoria( Integer idCategoria ) {
        this.idCategoria = idCategoria ;
    }

    public Integer getIdCategoria() {
        return this.idCategoria;
    }

    public void setIdSottocategoria( Integer idSottocategoria ) {
        this.idSottocategoria = idSottocategoria ;
    }

    public Integer getIdSottocategoria() {
        return this.idSottocategoria;
    }


    //----------------------------------------------------------------------
    // GETTERS & SETTERS FOR FIELDS
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    // toString METHOD
    //----------------------------------------------------------------------
    public String toString() { 
        StringBuffer sb = new StringBuffer(); 
        sb.append(idCategoria);
        sb.append("|");
        sb.append(idSottocategoria);
        return sb.toString(); 
    } 


}
/*
 * Created on 18 nov 2016 ( Time 17:08:42 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package it.csi.sira.backend.metadata.integration.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import it.csi.sira.backend.metadata.integration.dto.SipraMtdDTipoCategoria;
import it.csi.sira.backend.metadata.integration.dao.SipraMtdDTipoCategoriaDAO;
import it.csi.sira.backend.metadata.utils.GenericDAO;
import org.springframework.jdbc.core.RowMapper;

/**
 * SipraMtdDTipoCategoria DAO implementation 
 * 
 * @author Telosys Tools
 *
 */
public class SipraMtdDTipoCategoriaDAOImpl extends GenericDAO<SipraMtdDTipoCategoria> implements SipraMtdDTipoCategoriaDAO {
	//----------------------------------------------------------------------
	/**
	 * DAO constructor
	 */
	public SipraMtdDTipoCategoriaDAOImpl() {
		super();
	}

	private final static String QUERY_PRIMARY_KEY = 
		"select * from sipra_mtd_d_tipo_categoria where id_tipo_categoria = :id_tipo_categoria";
	
	private final static String QUERY_INSERT = 
		"insert into sipra_mtd_d_tipo_categoria(id_tipo_categoria,des_tipo_categoria) values(:id_tipo_categoria,:des_tipo_categoria)";

	private final static String QUERY_UPDATE = 
		"update sipra_mtd_d_tipo_categoria set des_tipo_categoria = :des_tipo_categoria  where id_tipo_categoria = :id_tipo_categoria";

	private final static String QUERY_DELETE = 
		"delete from sipra_mtd_d_tipo_categoria where  id_tipo_categoria = :id_tipo_categoria";

	private final static String SQL_COUNT_ALL = 
		"select count(*) from sipra_mtd_d_tipo_categoria";
	
	@Override
	public String getPrimaryKeySelect() {
		return QUERY_PRIMARY_KEY;		
	}
	
	@Override
	public String getTableName(){
		return "sipra_mtd_d_tipo_categoria";
	}

	@Override
	public String getSqlSelect() {
		return "select * from sipra_mtd_d_tipo_categoria";
	}

	@Override
	public String getSqlInsert() {
		return QUERY_INSERT;
	}

	@Override
	public String getSqlUpdate() {
		return QUERY_UPDATE;
	}

	@Override
	public String getSqlDelete() {
		return QUERY_DELETE;
	}

	@Override
	public String getSqlCount() {
		return SQL_COUNT_ALL;
	}

	public SipraMtdDTipoCategoria findByPK(Integer idTipoCategoria) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_tipo_categoria", idTipoCategoria);
		return super.findByPK(map);		
	}

	public int deleteByPK(Integer idTipoCategoria) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_tipo_categoria", idTipoCategoria);
		return super.delete(getSqlDelete(), map);		
	}

	@Override
	public java.util.Map<String, Object> getValuesForInsert(SipraMtdDTipoCategoria sipraMtdDTipoCategoria) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_tipo_categoria", sipraMtdDTipoCategoria.getIdTipoCategoria());
		map.put("des_tipo_categoria", sipraMtdDTipoCategoria.getDesTipoCategoria());
		return map;
	}

	@Override
	public java.util.Map<String, Object> getValuesForUpdate(SipraMtdDTipoCategoria sipraMtdDTipoCategoria) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("des_tipo_categoria", sipraMtdDTipoCategoria.getDesTipoCategoria());
		map.put("id_tipo_categoria", sipraMtdDTipoCategoria.getIdTipoCategoria());
		return map;
	}

	public java.util.Map<String, Object> getValuesForPrimaryKey(SipraMtdDTipoCategoria sipraMtdDTipoCategoria) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_tipo_categoria", sipraMtdDTipoCategoria.getIdTipoCategoria());
		return map;
	}

	@Override
	public java.util.Map<String, Object> getValuesForDelete(SipraMtdDTipoCategoria sipraMtdDTipoCategoria) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_tipo_categoria", sipraMtdDTipoCategoria.getIdTipoCategoria());
		return map;
	}

	@Override
	public RowMapper<SipraMtdDTipoCategoria> getRowMapper()  {
		//--- RowMapper to populate a new bean instance
		//return new SipraMtdDTipoCategoriaRowMapper( new SipraMtdDTipoCategoria() ) ;

       return new SipraMtdDTipoCategoriaRowMapper() ;
	}

	//----------------------------------------------------------------------
	/**
	 * Populates the given bean with the data retrieved from the given ResultSet
	 * @param rs
	 * @param sipraMtdDTipoCategoria
	 * @throws SQLException
	 */
	private static void populateBean(ResultSet rs, SipraMtdDTipoCategoria sipraMtdDTipoCategoria) throws SQLException {

		//--- Set data from ResultSet to Bean attributes
		sipraMtdDTipoCategoria.setIdTipoCategoria(rs.getInt("id_tipo_categoria")); // java.lang.Integer
		if ( rs.wasNull() ) { sipraMtdDTipoCategoria.setIdTipoCategoria(null); }; // not primitive number => keep null value if any
		sipraMtdDTipoCategoria.setDesTipoCategoria(rs.getString("des_tipo_categoria")); // java.lang.String
	}


	/**
	 * Specific inner class for 'RowMapper' implementation
	 */
	public static class SipraMtdDTipoCategoriaRowMapper implements RowMapper<SipraMtdDTipoCategoria> {
	
		public SipraMtdDTipoCategoriaRowMapper() {
			
		}
		
		public SipraMtdDTipoCategoria mapRow(ResultSet rs, int rowNum) throws SQLException {
			SipraMtdDTipoCategoria bean = new SipraMtdDTipoCategoria();
			populateBean(rs, bean);
			return bean;
		}
	}
}

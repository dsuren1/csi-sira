/*
 * Created on 25 nov 2016 ( Time 10:35:38 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package it.csi.sira.backend.metadata.integration.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import it.csi.sira.backend.metadata.integration.dto.SipraMtdTParolaChiave;
import it.csi.sira.backend.metadata.integration.dao.SipraMtdTParolaChiaveDAO;
import it.csi.sira.backend.metadata.utils.GenericDAO;
import org.springframework.jdbc.core.RowMapper;

/**
 * SipraMtdTParolaChiave DAO implementation 
 * 
 * @author Telosys Tools
 *
 */
public class SipraMtdTParolaChiaveDAOImpl extends GenericDAO<SipraMtdTParolaChiave> implements SipraMtdTParolaChiaveDAO {
	//----------------------------------------------------------------------
	/**
	 * DAO constructor
	 */
	public SipraMtdTParolaChiaveDAOImpl() {
		super();
	}

	private final static String QUERY_PRIMARY_KEY = 
		"select * from sipra_mtd_t_parola_chiave where id_parola_chiave = :id_parola_chiave";
	
	private final static String QUERY_INSERT = 
		"insert into sipra_mtd_t_parola_chiave(id_parola_chiave,des_parola_chiave) values(:id_parola_chiave,:des_parola_chiave)";

	private final static String QUERY_UPDATE = 
		"update sipra_mtd_t_parola_chiave set des_parola_chiave = :des_parola_chiave  where id_parola_chiave = :id_parola_chiave";

	private final static String QUERY_DELETE = 
		"delete from sipra_mtd_t_parola_chiave where  id_parola_chiave = :id_parola_chiave";

	private final static String SQL_COUNT_ALL = 
		"select count(*) from sipra_mtd_t_parola_chiave";
	
	@Override
	public String getPrimaryKeySelect() {
		return QUERY_PRIMARY_KEY;		
	}
	
	@Override
	public String getTableName(){
		return "sipra_mtd_t_parola_chiave";
	}

	@Override
	public String getSqlSelect() {
		return "select * from sipra_mtd_t_parola_chiave";
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

	public SipraMtdTParolaChiave findByPK(Integer idParolaChiave) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_parola_chiave", idParolaChiave);
		return super.findByPK(map);		
	}

	public int deleteByPK(Integer idParolaChiave) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_parola_chiave", idParolaChiave);
		return super.delete(getSqlDelete(), map);		
	}

	@Override
	public java.util.Map<String, Object> getValuesForInsert(SipraMtdTParolaChiave sipraMtdTParolaChiave) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_parola_chiave", sipraMtdTParolaChiave.getIdParolaChiave());
		map.put("des_parola_chiave", sipraMtdTParolaChiave.getDesParolaChiave());
		return map;
	}

	@Override
	public java.util.Map<String, Object> getValuesForUpdate(SipraMtdTParolaChiave sipraMtdTParolaChiave) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("des_parola_chiave", sipraMtdTParolaChiave.getDesParolaChiave());
		map.put("id_parola_chiave", sipraMtdTParolaChiave.getIdParolaChiave());
		return map;
	}

	public java.util.Map<String, Object> getValuesForPrimaryKey(SipraMtdTParolaChiave sipraMtdTParolaChiave) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_parola_chiave", sipraMtdTParolaChiave.getIdParolaChiave());
		return map;
	}

	@Override
	public java.util.Map<String, Object> getValuesForDelete(SipraMtdTParolaChiave sipraMtdTParolaChiave) {
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("id_parola_chiave", sipraMtdTParolaChiave.getIdParolaChiave());
		return map;
	}

	@Override
	public RowMapper<SipraMtdTParolaChiave> getRowMapper()  {
		//--- RowMapper to populate a new bean instance
		//return new SipraMtdTParolaChiaveRowMapper( new SipraMtdTParolaChiave() ) ;

       return new SipraMtdTParolaChiaveRowMapper() ;
	}

	//----------------------------------------------------------------------
	/**
	 * Populates the given bean with the data retrieved from the given ResultSet
	 * @param rs
	 * @param sipraMtdTParolaChiave
	 * @throws SQLException
	 */
	private static void populateBean(ResultSet rs, SipraMtdTParolaChiave sipraMtdTParolaChiave) throws SQLException {

		//--- Set data from ResultSet to Bean attributes
		sipraMtdTParolaChiave.setIdParolaChiave(rs.getInt("id_parola_chiave")); // java.lang.Integer
		if ( rs.wasNull() ) { sipraMtdTParolaChiave.setIdParolaChiave(null); }; // not primitive number => keep null value if any
		sipraMtdTParolaChiave.setDesParolaChiave(rs.getString("des_parola_chiave")); // java.lang.String
	}


	/**
	 * Specific inner class for 'RowMapper' implementation
	 */
	public static class SipraMtdTParolaChiaveRowMapper implements RowMapper<SipraMtdTParolaChiave> {
	
		public SipraMtdTParolaChiaveRowMapper() {
			
		}
		
		public SipraMtdTParolaChiave mapRow(ResultSet rs, int rowNum) throws SQLException {
			SipraMtdTParolaChiave bean = new SipraMtdTParolaChiave();
			populateBean(rs, bean);
			return bean;
		}
	}
}

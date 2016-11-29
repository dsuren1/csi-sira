/*
 * Created on 8 nov 2016 ( Time 16:16:33 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package it.csi.sira.backend.metadata.integration.dao;

import it.csi.sira.backend.metadata.integration.dto.SipraMtdTCategoriaAppl;
import java.util.List;
import java.util.Map;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;




/**
 * SipraMtdTCategoriaAppl DAO interface
 * 
 * @author Telosys Tools
 */
public interface SipraMtdTCategoriaApplDAO {

	//----------------------------------------------------------------------
	/**
	 * Finds a bean by its primary key 
	 * @param idCategoriaAppl
	 * @return the bean found or null if not found 
	 */
	public SipraMtdTCategoriaAppl findByPK(Integer idCategoriaAppl);

	public List<SipraMtdTCategoriaAppl> findAll();
	
	public List<SipraMtdTCategoriaAppl> findByCriteria(java.util.Map<String, Object> params);
	public List<SipraMtdTCategoriaAppl> findByCriteria(MapSqlParameterSource params);
	
	public <V> List<V> findByGenericCriteria(String query, RowMapper<V>  rowMapper, Map<String, Object> params);
	public <V> List<V> findByGenericCriteria(String query, RowMapper<V>  rowMapper, MapSqlParameterSource params);
	public List<SipraMtdTCategoriaAppl> findByGenericCriteria(String query, MapSqlParameterSource params);
	
	public void insert(SipraMtdTCategoriaAppl bean);

	public void update(SipraMtdTCategoriaAppl bean);
	
	public void update(String sql, Map<String, Object> param);

	public int deleteByPK(Integer idCategoriaAppl);
	
	public int delete(String query, Map<String, Object> params);
	public int delete(String query, MapSqlParameterSource params);

	public boolean exist(Map<String, Object> params);

    public RowMapper<SipraMtdTCategoriaAppl> getRowMapper();
}
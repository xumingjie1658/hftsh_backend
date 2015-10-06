package com.hftsh.backend.orm.mybatis;


import java.util.List;
import java.util.Map;

public interface BaseMapper<T extends IdEntity> {
	/**
	 * return 0 if fail
	 */
	int insert(T entity);
	
	int delete(T entity);
	
	int delete(Long id);
	
	int update(T entity);
	
	T get(Long id);
	
	List<T> findListForExample(T entity);
	
	List<T> findListForMap(Map<String, Object> map);
	
	/**
	 * 使用findListForExample(T entity)对应的sql,在MyBatisDao内实现
	 * @param page
	 * @param entity
	 * @return
	 */
	Page<T> findPageForExample(Page<T> page, T entity);
	/**
	 * 使用findListForMap(T entity)对应的sql,在MyBatisDao内实现
	 * @param page
	 * @param map
	 * @return
	 */
	Page<T> findPageForMap(Page<T> page, Map<String, Object> map);

}

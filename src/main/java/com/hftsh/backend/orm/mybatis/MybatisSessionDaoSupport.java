package com.hftsh.backend.orm.mybatis;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.dao.support.DaoSupport;
import org.springframework.util.Assert;

import javax.annotation.Resource;

/**
 * Created by xumingjie on 15/10/5.
 */
public abstract class MybatisSessionDaoSupport extends DaoSupport {
    protected SqlSession sqlSession;

    @Resource(name="sqlSessionFactory")
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        this.sqlSession = new SqlSessionTemplate(sqlSessionFactory);
    }

    /**
     * Users should use this method to get a SqlSession to call its statement
     * methods This is SqlSession is managed by spring. Users should not
     * commit/rollback/close it because it will be automatically done.
     *
     * @return Spring managed thread safe SqlSession
     */
    public final SqlSession getSqlSession() {
        return this.sqlSession;
    }

    /**
     * {@inheritDoc}
     */
    protected void checkDaoConfig() {
        Assert.notNull(this.sqlSession,
                "Property 'sqlSessionFactory' or 'sqlSessionTemplate' are required");
    }
}

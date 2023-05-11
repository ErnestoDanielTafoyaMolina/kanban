import DbConnectionFactory from '../helper/data/dbConnectoniFactory'
import _ from 'lodash';
import jwt from 'jsonwebtoken';


const asignarDB = async (req, res, next) => {
    try {

        let empresa = null;
        let token = _.get(req, 'headers.authorization', '');
        token = token.replace('Bearer', '').trim();
        const whiteListURLs = [
            '/api/auth/google',
            '/api/auth/loginfirebase',
            '/api/auth/loginEmail',
            '/api/user/login2'
        ];
        if(whiteListURLs.includes(req.url)){
            empresa = 'kanba'
            if(token){
                const {idUsuario, nombre, correo, codigoEmpresa, areaProyecto} = jwt.verify(token, process.env.SECRET_JWT_SEED);
                req.usuario = {
                    idUsuario,
                    nombre,
                    correo,
                    codigoEmpresa,
                    areaProyecto
                }
                return res.status(200).json({
                    idUsuario,
                    nombre,
                    correo,
                })
            }
            
        } else if(token) {
            const {idUsuario, nombre, correo, codigoEmpresa, areaProyecto} = jwt.verify(token, process.env.SECRET_JWT_SEED);
            console.log(req.usuario)
            req.usuario = {
                idUsuario,
                nombre,
                correo,
                codigoEmpresa,
                areaProyecto
            }
            empresa = req.usuario.codigoEmpresa
        }

        if (_.isEmpty(empresa)) {
            return res.status(500).send('Bearer token is required');
        }

        req.dbConnections = {
            adminDB: await DbConnectionFactory.getConnection('kanba'.toLocaleLowerCase()),
            mainDB: await DbConnectionFactory.getConnection(empresa.toLocaleLowerCase()),
        };

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send('Bearer token is required');
    }
}

module.exports = asignarDB;

import { Request, Response } from "express";
import UserModel from "../models/user";

//Get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.findAll();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ msg: "Ha ocurrido un error en el servidor" });
    }
};

//Get by user
export const getByUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findByPk(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: "Ha ocurrido un error en el servidor" });
    }
};

//Save user
export const saveUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const isEmailExist = await UserModel.findOne({
            where: {
                email: body.email,
            },
        });
        if (isEmailExist) {
            return res
                .status(400)
                .json({ msg: "Este correo ya ha sido registrado anteriormente" });
        }
        const user = await UserModel.create(body);
        res.json({ user });
    } catch (error) {
        res.status(500).json({ msg: "Ha ocurrido un error en el servidor" });
    }
};

//update user
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = await UserModel.findByPk(id);
        if (!user) {
            res.status(400).json({ msg: "Este usuario no existe" });
        }
        await user?.update(body);
        res.json({ user, msg: "El usuario ha sido actualizado" });
    } catch (error) {
        res.status(500).json({ msg: "Ha ocurrido un error en el servidor" });
    }
};

//Delete user
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findByPk(id);
        user?.destroy();
        res.json({ msg: "El usuario ha sido eliminado" });
    } catch (error) {
        res.status(500).json({ msg: "Ha ocurrido un error en el servidor" });
    }
};

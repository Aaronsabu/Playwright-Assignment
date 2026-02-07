import test from '@playwright/test';
import {ObjManager} from '../pageObject/assignment/ObjManager.js';
import { data } from '../../utils/assignmentData';

test('sign up', async({page})=> {
    const objManager = new ObjManager(page);
    const signUp = objManager.getSignUp();
    await signUp.goToSignUp();
    await signUp.signingUp();
})

test('sign up and close', async({page})=> {
    const objManager = new ObjManager(page);
    const signUp = objManager.getSignUp();
    await signUp.goToSignUp();
    await signUp.signupAndClose(data.username,data.password);
})
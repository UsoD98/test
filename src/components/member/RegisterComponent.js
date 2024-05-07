import React from 'react';
import useCustomMove from "../../hooks/useCustomMove";
import {registerMember} from "../../api/memberApi";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

function RegisterComponent(props) {
    const [form, setForm] = React.useState(initState);
    const [errors, setErrors] = React.useState({});
    const [result, setResult] = React.useState(null);
    const { moveToPath } = useCustomLogin();

    const handleChangeForm = (e) => {
        form[e.target.name] = e.target.value;
        setForm({ ...form });
    };

    const validateNickname = () => {
        if (!form.nickname.trim()) {
            return '닉네임을 입력해주세요.';
        }
        return '';
    };

    const validateEmail = () => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!form.email.trim()) {
            return '이메일을 입력해주세요.';
        }
        if (!emailRegex.test(form.email)) {
            return '유효한 이메일 주소를 입력해주세요.';
        }
        return '';
    };

    const validatePassword = () => {
        if (!form.password.trim()) {
            return '비밀번호를 입력해주세요.';
        }
        if (form.password.length < 8) {
            return '비밀번호는 최소 8자 이상이어야 합니다.';
        }
        return '';
    };

    const validatePasswordConfirm = () => {
        if (!form.passwordConfirm.trim()) {
            return '비밀번호 확인을 입력해주세요.';
        }
        if (form.password !== form.passwordConfirm) {
            return '비밀번호와 비밀번호 확인 값이 일치하지 않습니다.';
        }
        return '';
    };

    const handleClickRegister = async () => {
        const newErrors = {
            nickname: validateNickname(),
            email: validateEmail(),
            password: validatePassword(),
            passwordConfirm: validatePasswordConfirm(),
        };

        if (Object.values(newErrors).some(error => error !== '')) {
            setErrors(newErrors);
        } else {
            // 회원가입 로직 처리
            console.log('회원가입 성공!');
            console.log(form)
            setErrors({});
            setForm(initState);

            // Create a copy of the form data
            const member = { ...form };

            // Remove the passwordConfirm field
            delete member.passwordConfirm;
            console.log(member)

            // Now send the formData to the server
            try {
                await registerMember(member);
                setResult('회원가입이 완료되었습니다.');
                moveToPath('/member/login');
            } catch (error) {
                setErrors({ email: '이미 사용중인 이메일입니다.' });
            }
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">REGISTER</h2>
            <div className="mb-4">
                <label htmlFor="nickname" className="block font-bold mb-2">닉네임</label>
                <input
                    id="nickname"
                    name="nickname"
                    type="text"
                    value={form.nickname}
                    onChange={handleChangeForm}
                    placeholder="닉네임은 중복 가능합니다"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.nickname && <p className="text-red-500 mt-1">{errors.nickname}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">이메일</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChangeForm}
                    placeholder="example@domain.com"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block font-bold mb-2">비밀번호</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChangeForm}
                    placeholder="8자 이상의 비밀번호"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div className="mb-6">
                <label htmlFor="passwordConfirm" className="block font-bold mb-2">비밀번호 재확인</label>
                <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    value={form.passwordConfirm}
                    onChange={handleChangeForm}
                    placeholder="비밀번호 재확인"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.passwordConfirm && <p className="text-red-500 mt-1">{errors.passwordConfirm}</p>}
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClickRegister}
                >
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default RegisterComponent;
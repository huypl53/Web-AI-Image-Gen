import React from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '~/components';

const CreatePost = props => {
	const navigate = useNavigate();
	const [form, setForm] = React.useState({
		name: '',
		prompt: '',
		photo: ''
	});

	const [generatingImg, setGeneratingImg] = React.useState(false);
	return <div>CreatePost</div>;
};

export default CreatePost;

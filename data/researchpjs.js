export const researchpjs = [
    {
        imgSrc:"./img/tinysleepnet.png",
        content:"<strong>Deep Learning for Sleep Stage Scoring.</strong> We develop a deep learning model, <a href='https://github.com/akaraspt/deepsleepnet'>DeepSleepNet</a>, for automatic sleep stage scoring based on raw, single-channel EEG. This model has been further improved into a more efficient and light-weight, <a herf='https://github.com/akaraspt/tinysleepnet'>TinySleepNet</a>, with the aim to be deployed on a wearable device."
    },
    {
        imgSrc:"./img/quan-sleep.png",
        content:"<strong>Quantifying Transferability of Sleep Stage Scoring Models.</strong> We develop a novel method for computationally quantifying the impact of different data characteristics on the transferability of deep learning models. <a href='https://github.com/akaraspt/transferability_sleep'>Quantification</a> is accomplished by training and evaluating two models with significant architectural differences, TinySleepNet and U-Time, under various transfer configurations in which the source and target datasets have different recording channels, recording environments, and subject conditions."
    },
    {
        imgSrc:"./img/blink-fnp.png",
        content: "<strong>Facial Nerve Palsy Detection.</strong> We develop dynamic blink feature extraction algorithms using a facial landmark detection model to capture eyelid movement, which are then used to derive dynamic parameters for each blink. These features are used to train machine learning models for detecting facial nerve palsy (FNP) detection. We believe that these features can be further studied to determine their potential as objective measures for diagnosing FNP in addition to the facial asymmetry features proposed in other studies.",
    },
    {
        imgSrc:"./img/blink-al.png",
        content: "<strong>Long-Term Active Learning for Eyelid Keypoint Detection.</strong> We develop a long-term active learning (AL) framework designed to select the minimum number of frames for annotation from an expanding unlabeled pool, thereby maximizing the performance of eyelid keypoint detection (EKD) models for practical use.",
    },
    {
        imgSrc:"./img/mosquitosongp.png",
        content:"<strong>Noise-Robust Mosquito Species and Sex Classification.</strong> We develop a new deep learning model, <a href='https://github.com/akaraspt/mosquitosongp'>MosquitoSong+</a>, to identify the species and sex of mosquitoes from raw wingbeat sounds so that it is robust to the environmental noise and the relative volume of the mosquito's flight tone."
    },
    {
        imgSrc:"./img/weak-nph.png",
        content:"<strong>Weakly-supervised NPH Classification.</strong> We develop a new weak supervision method for training a CSF segmentation model as a feature extractor for NPH classification on brain CT scans. Our objective is to reduce the need for expensive segmentation annotations by neuroradiologists. "
    },
    // {
    //     imgSrc:"https://karpathy.ai/assets/openai_logo.png",
    //     content:"<strong>End-to-End NPH Classification.</strong>"
    // },
    // {
    //     imgSrc:"https://karpathy.ai/assets/openai_logo.png",
    //     content:"<strong>Federated Learning for Medical Application.</strong>"
    // },
]


// add link by use <a href = ""> </a> in content
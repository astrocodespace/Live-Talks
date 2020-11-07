import React, {useState} from 'react';
import {SLayout} from "./LayoutComponent.styled";
import {SIconLink, SNav, SSidebarContainer, STitle} from "../SidebarComponent/SidebarComponent.styled";
import {SAvatarBorder, SImage, SInnerBorder} from "../AvatarComponent/AvatarComponent.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import colors from "../../theme/colors";
import {SContent} from "../ContentComponent/ContentComponent.styled";
import {LinkComponent} from "../SidebarComponent/LinkComponent";


const LayoutComponent = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <SLayout>
            <SSidebarContainer>
                <div>
                    <STitle>Your office</STitle>
                    <SAvatarBorder>
                        <SInnerBorder>
                            <SImage
                                src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRYXFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHSUtLSstKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABGEAABAwEFBAcFBQUECwAAAAABAAIRAwQFEiExQVFhcQYHEyKBkaEUMrHB8EJSctHxQ4KSsuEIIzNiFRY0NVNjc4Ois8P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAgMAAgMAAAAAAAAAAQIRAyESMQRBURORIjJx/9oADAMBAAIRAxEAPwDxp5URKle1RYUaIgnBINTg1NNBFKEkItBFIJyikCBCKRSEqMoKajQc9wYxrnvcYa1rS5zjua0Zkr0no51P16gD7bU7Bpz7NkPqkcT7rP8AyV4za3mAKIeN6+jbt6B3ZZxDbIyofvVpqnnDu6PALbpU6dMRTp02DcxjWjyAVWRXja+W2vG8J6+nbS5lQFtSmx4Ooe0OHiCuPv3q0sVoBNAezVNmDOkTxpnID8MI/j36TZZ7eHuUTit3pL0YtVhdFenDSYbUb3qb+Tth4GCsFynWhDCgiUE1wQigiEyJBOKaUACgiUFJgigigEkkkgL7goyFK5MVFSATsKQTwprPJGWphClKYUkmwikiEqChXrluita6zaFBhe93k0bXvP2WjafmobFZX1ajKVNuJ73BjGja5xgDhzX0d0K6L0rtohjYdVdBrVYze7YBuY3OB46koxm1Y47R9DehVnuyn3QKlocP7ysRnxaz7rOG3atutUTqtRVKr1WWeo6ePjB71E5yaXqMlc15HXOMnBJroQcVBUKrHl0d4trlenTrU3UqrWvY4Q5rhII4rxHrC6COsRNejL7MTtzdRJMBrjtbOQdyBzgn14VyCpn1GvYWPAc1wLXNcJDmnIgjcurHOZxw8nDcLuPmJNXUdPujBsNohkmhUl1InOPvUyd7ZHMELl1NTBTgmhOCcIUCigUA0oJyCRgkkkkBhJJFMLrio8SDyo5RsVYBTgVA0qVqnbLI4ppTpTSUkmFKUSgUUPRupa7g60VLU4SKLcDJ/wCJUmSOIaCP317DabQYXnnVZZ8Fha7Q1alR54wezHoxdpiyUZZ66d3FxdSrwfIUVQplA5J7iFllluOjHHVMCDmolQvcuet4Bd9SoqrstFM5qr1TsRFdKzjKjqPhTuCpWk5rbjysZ5yWMjpzYxabDVZHfpjtaeUmWCXAc24h4rw9e+VKog7tCvCbbRwVHs+49zf4XEfJdku3n8mHiiRCATgqjIkEUEAECiglTJJKEUgCKSSZLbmJppq04KJwWdq9IwxOATkHFLaMsSJTSmylKqM/EZTSUJW90Haz2trqlNtUU2VKnZuEtcWtyBG3WeYCL1N1eHH5ZST7evdFGBtisjW7bPTJ5luI+pW1MKGjRa2AwBrQO60CA0fdA0EKd7RE6rHK77ejjPGaZF49JmUZaO87cBJWW3pntdTcOcAKe8msoku7N1Wo73WNGfjOQ5rGtXtzx/hspg/ZaGk8jUcDnpo1Z3LfUaTDXdbFk6ZseQIIW3RtfaNdG/LhkFwNmuquHS6HScwYGHL7wDZz4fku5uWkMMZjL9VhZblqOieMx2jvC98AdP2dg2rma3TQTGAndC1L6oS8tDQTG2c+CwTd9oGbHYXSe60MiIy7xa4zMbEY7l1Rlrx3E/8ArXUGZpEN3GQY4LSsl7Mrg4DmNm5YRt1rYYtVJtRpyxMAD2zvEAHwhaVgsLGkvZkD8VvM+9VjcOtrVXMaLyTpfQDLZWA0Lg7+Jod8yvX3tlcF1gXNSaPaQ93avc3EwxgDMOEECJBkDU79y6cNOXmxtnX04YBPAQaFK1q1cVqMhAhSkJpCDiKEoTyECFJmQknJQnAaknQkgmm4KJ4UxKY4rOtJUKY8qVxVd7kSFQLkiVESiCridJAV1vVhSa68GNcYBp1f5fylck1db1Y1Gi8KQd9tlVg/EaZI+EeKM5vGq4us49nfDXaggjLx/RSBshZJhtCQe8XnETqMMtDZ8z+8rdkqyAZyP1oubx/xd+V/ysTexN1Az3qI2AH7ThwByWrRbkhUAG1ZZcci8c79Mund7RoNdp19VdstCDluT21J0GW9PY4RAIJ2xsWnHjJNllcrdMK+qffDhsyKZ7G1wnMHeJCt3odWkxKZZIiJzUcmMvbXHc6U3WAc1CbGBpsWy+ms21GJCnHCDLKqFTJcz0/sk2U1NuKnPEYiB/Otq2Vu+1k6kTGZ19VkdOXH2J+J0ntKbfEO09CfBdEx7jG3eGf/AB5m0KZoTGhTNXS8mmOCYQpnKIoqojKBCfCEKFo4ToRhGFUTTISTklWkr1VV3q29V6jVm0QOUblKVG5MIygESggJqa6LoLHt9lkkDtQMuIIHrC5ykr9irOpvbUaYcxzXNPFpBHwT9lvV297v4CQBkCcxxiAYCgsbtp102zwMaBc3S6T+2tlrS1zWw/cHHdvGWS1rvrQDiByE58NDnrosrNY9uzGy59N/28MbG1VDWNQ5uho+vBYdrtZa2ZkmQZ1zcQPNVbJb4cBPeOTtYA4bti5Msble67Mc5jOo1r3q1mAig5uf3pIHksSne1qpyKgDzsLGkQOIk+a1KtpbizIAja7PTbtB2qCpZGuMh7ds5xqMvmqyx66XjlfemPeFttNQgscGcHMJJ55iAti6qznD+9IxEQInZunNU3WIhuE1GyM9dd2exRvqmm0uJ8GwR5jyUeO5o7nfx0DraWDvOkaB35qnbLbtH1z3LFZegdIOYP2doDjtHBPpDIiZH2dZwkAnbsmEsJZU55TKIW1CagkjJ0ZnXLdtH5qr1lUyyzUgNHVg528uwPnwz9Uap74iYkYtMoO2c1hdPL4Faq2kx0spTMaYzExyA9Su7H3HBndYZOYapQmNCetXBTXJhT3JhSq4ACMJBbHR6xh7y46N+KzyulKIuuqROH81WqUi0wQQeK73AqttsDajYI5HaEYcm05RxUJLZ/0E7ekttxkpvKhc5S1FXeobIHOTCUiggwKCcmpK0lpK5SVKkVdoqoix0nQ6vhquaTk5sxvLTPwldpZXtbLZPumRnJjZl9eq82sFXBUY7c4TxEwQu+rPLXYXNzBAORnI/MfFTyem3BVulSxgh0YmxLjnh1PiY+JUVo6MdsHEPqMJ0c1xGW4gGFI2qwGOMwNZEATy48Vt3fbYgEe9nv8A0yXL4/btmWulO7bkpUmhtWnjIwy7E+TBkk57Vaq3bZCMhUbroX5ZzEZrQfX45aZZ6qhXvAh2CAZzzGccck7MG2Nv7f7V6lhsgmaVQ5NjN+/PbquZvK6BVqRRNSiAc4cTlugzK6mra5yy3+fJVn1BEkcNmZ+Sm+M9He/u/wBsKpdzKL2MAkuBGInMncSfPwhR9se+QTAMHLYAQYGzP4KW8rR3gZyAnP8ANZ9Xus1knWf8xyk8j6JSMrl7Zt82nuOdJGWEZzrEZj68lyjQti/qkBrNp7x5DujLwPksloXdhOnm8t3kcAkQngJrlTHSNyYU9yYVNXBC6fot/hu/F8lzAWtcNtFN8H3XZHgdhWWc3FR1afhQAlSBqywKosCSPbN3hJbM3DVHhVKjlaqBQOCtasQr913W6s6AoKdOTC9H6H3Z3JAzPyWfJlqNOPHyrEZ0MbGbisq9Oi1SkMTe8F64LAdyr2mwSCCFhOTJ0Xjjw0NgwVcola/Sy6uyqyBkc1j0hC6sLvty5zVW2ajmF6z0isMkvYe9APnJI+fivK7BZnVajKTBL3vaxo3ucQB8V7dbrPMjflPEJcvpp8ebtcKy0GcWWu0Z5cVq2a0YhqMszqMvqVn33ZjTeXARJzgZZbD6qlZbVhM55844fBYuix11K2Ny3QDOgyTn06eZiAYymOfJc822N1mQYy5DSecBGrbg5hE6mBO/XLfMqbYvG1oW7s2kkO0AyzG3eqNotUjuzlOpVWtau6cRMk8Iz1z3ZLLr2kgSDBgAieP9FOpVZZ3R9rr4nROgHnxCfQoOrPDR7pzcdYA/oql303VDpGzdOxdlc1hzFNo7z3Bo5E6/ElXNb0iS63XmvSqq11qeG+6wNpj90Z+pKzWhWb4oYLRWbqWVqrSd5a9wnxUDAuzWnnZZbuxTHKQqIoKI3JqLkAoWcE5BqclTaN33zUp5e83cVoV+kDntgNwk7VzwU1NTMZsqsdq7ekmJLVnpHUCgcFZeogyTChomuyhLl7X0RsGCk1pGZAPmvK7rs8QvVKN+2djGuNVjSGjbJ03DNZ8uGWXqNePLGe66F1kVa1WTKVgWvrGo0x3WmodmWEHzz9Fyt79YlpqghjWUmncMTvM5eijH4vJffR5fJwnrtW6bMDnwNi5gWLflz/Lapa9tqPMueSeabSMmSu7j4JPdcnJz2+o7XqrsDDeFAASe/UJOsMYSOXeLV3dOqKjZ3Eg/ia4g+srkOpXv3k87GWWp5uqUh+a3gewtNekdG1nkcA9xe0+Tlh8vLVn46fhTct+0d92HGD4Dn9T6LhLVdz2EtG+RHFeo1oIPJYtus4MyAfrauW5O2Y7eZ2qrUp6lwz+oVQX5U0Ak5iRM55Su8ttzNqHNuWuW8b9vgs43MwGGtG6YGX1Kmcs+4q8N+q5Z141XndsA1+v6q5YLue/UHWJPyC6K77kAfoDGu7wC26NiYG+s79vmleT8GPFPdZ112HANP14+q7zordWBptD9SIp8iIL/AB0HCd6z+jFwdu/E4EUmnvH75+4OG/y2rpellv8AZ7LWqj9lSe4Di1pLR5wF0fHw3fKub5XLJPDF81XtXD7VaH7H16zvA1HEKECFUZ6qxTqDQ/ouzW3n70L1E5TPCicFFXEDkgnOCDVCzwnBNCeFNMApmKJSsRBYlSQlFNOmlNIaMB5yUfaANGtHJoVDGgXru8pPUcvjb7q+bWd6gqWonaqpcmyleQ5gkfUlBpTWiU4lQrRwKlxwFEwJtV08keWoWt16f/Z/p4rVa6n3aNJv8dRx/wDmup6e2Ts7W2qB3azBP42ZH0LFR/s/2PDZbRWj/Erhg4tpUx83uXd9LLrFooYQQKjTjp/iH2fEZeS5OfHzxrt+Nn4Zz8cZYqxIgjl9fWqNqynLnlnzCguqTkRBGRB2RqCr9YGc8wuDy6eprtjdmSCdFE2wmZ14ZgLYDRoApaFGZJH6JaO1mWaxAax+v6K3dFzVLS+PcpNPfeP5W8fhK1Luul1d0e7TB7ztpP3W8fguwo0GsaGMADRoAuji4t91y8/P49T2hp0G02BjBDWiAAvP+uK2YLtqiYNR1OmOMvDnD+Frl6DWK8b6+LcIs1DaXPqnk0YB/M7yXdOnnZPIgikmlG02JadQjQqQOa7XuneNPLYqwRBVb37TrXo6qwjXwOwpgUzKnluQdSB0y4HTwKVw/FTP9NanBNLSNRCWJY2NJTlKwKCVJTcp0vaeEkMSSAKSCBXXtzGuOYTgmPCfCzqoaSdnkfzT21By4FCEYRMqPGH4k0lIIVHQCU7RJp9DdTdHs7pomM3urP54qrw0+QC64MJMuzKyOgdnNOwWOkREWakT+JzQSPVdCWrLJpj0569LoAea7BrnUbvP3xx3+azn2cOK7B1MrlreMFRzBzHIiR+Xgubk499u3g5belP2XPCMycgFt0bqaB3hO8DT+qo3CzFWAOoBPjC6kUk+Pimtlz8tl1FGk0howgtAyAiBHJWKdedcipixQPo5zpC3l05b2jqlfPHW5be0vOo2ZFFlOkN0xjd6v9F9CVHgCTkAJnhqvlS97wNotFauf2tV7xP3XOJaPBsDwWiFBwhNUpzUbggqCB1RxIaoI4FOa5MBjNBrlUyTcVltRItaeHL8lACnY1e5faNWehfQOzP4+Sawp7XqbG06+e1TeKX0qclnsyUk6Gbz5JJfxVf8sSBNhOKACaDXjJEIlNZoEqqHJIIhSZBekdVHQNltJtVqbNnY7CynsrVG6l3/AC26R9oyNAQfNwvpTquaRdNkmM2OdkIydVeQTxgiTtKdEdSxkRGgUgUbXKRpUKImFz/SVze0pAe8Q8n8OUes+q38S4u9HOdeHZjbgYODcAc4+rioy7jbh/221rhspx9qdMJA4mR6Zeq3hKTGhoAAgAAD5JxVYzU0jPPyuzSExyc5RvcBmU9I25PrNvEWe7rS8GHOpGm2NZqkUwRyxz4L5oaIC9n6970ijQs851ahqOH+SkMh/E9vkvGXJgCo3BORhANCCcUkBFV2DxKQQBnNPQVJKUEk9kUpYkEAnsaS4hu9UlFjSRulpopIwkVSQJTGbeacmjXmFNVBRCCSRkF9KdVtoa+6rJh+yx1M/ip1HNPwXzWF7L1BXmTTtVmJyY+nWZ/3GljwNwmm0/vFFOPWWp4QaE5qlRKhTutotDrQdSxrQN0ZOPiA0eB3rQKSBsoQenKPEggJykqi95ceGxWLTnDfE/JQvcGtLiYABJO4DUph8+9cd4dreTqYMihTZT4Bzv7x0fxNHguHeVbvW3m0WitaD+2qvqQdgc4lo8BA8FSQCCKCKACZVOUb09REyeSAICKSCARQSJQQCKadEXIOQDYQSwnckgNcoIoLRmCY9PKa8ZKaqCkgCkUgIXe9SNu7O8zTJyrUKjObmFtRvjDX+a4EFdF1bVA29rGXEACo6SdBNN4HqQinH0+E4IIkpGKKASSMiU1wRcoa9YNGhPJBGVG7d65DrVvb2a7a5Bh1VvYt3zV7pI4huI+C641sQ90jmvFuvm88VWz2YH3GurPHF3cZ6B/mmHlMQE0IvQaEAUkUEAyo6AmNCRMnkigEkkUkACgiU1AAJpKdKbKAWMoIpIDVKASSVphIOSSSMGaBAJJJEQWv0P8A9uo83f8Arcgkg4+ibu1Hguip+6EkkU0gRSSUma5R1NiSSZInr5264v8Aeb/+nS+BSSRBXDORakkgEkkkgIKeiekkgAgikgAU0pJIBjtEmoJIApJJID//2Q=='}/>
                        </SInnerBorder>
                    </SAvatarBorder>
                </div>
                <SNav>
                    <LinkComponent
                        icon={'home'}
                        active={false}
                    />
                    <LinkComponent
                        icon={'user'}
                        active={false}
                    />
                    <LinkComponent
                        icon={'compass'}
                        active={true}
                    />
                </SNav>
            </SSidebarContainer>
            <SContent>
                {children}
            </SContent>
        </SLayout>
    )
}

export default LayoutComponent;
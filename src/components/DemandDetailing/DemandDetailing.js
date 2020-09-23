import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { Box, Flex } from 'reflexbox'
import Fieldset from '../Fieldset'
import UserAvatar from '../UserAvatar'
import Typography from '../Typography'
import Button from '../Button'

const StyledDemandDetailing = styled.div`
  ${color}
  ${space}
  legend {
    font-size: 21px;
  }
`

const ContentWrapper = styled.div`
  ${color}
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dededf;
`

const ReportBodyTitle = styled.h3`
  border-bottom: 1px solid #dededf;
  margin-bottom: 28px;
`

const TopicItemWrapper = styled.div`
  margin-bottom: 28px;
  margin-left: 38px;
  &.mainTopic {
    margin-left: -20px;
  }
  &.lastTopic {
    margin-bottom: 0;
  }
`

const TopicItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 52px;
`

const getTopicClass = (value, parameter) => {
  if (value === 0) {
    return 'mainTopic'
  } else if (value === parameter - 1) {
    return 'lastTopic'
  } else {
    return null
  }
}

const DemandDetailing = ({ children, reportTitle, reportKind, detailingData, ...rest }) => {
  return (
    <StyledDemandDetailing {...rest}>
      <Fieldset legend={reportTitle} bordered p={5} pt={4} m={0}>
        <ContentWrapper>
          {(detailingData || []).map((item, index) => (
            <TopicItemWrapper className={getTopicClass(index, (detailingData || {}).length)}>
              {index === 1 && <ReportBodyTitle>{reportKind}</ReportBodyTitle>}
              <Flex alignItems="center" justifyContent="flex-start">
                <UserAvatar userName={item.name} displayName={item.name} mr={2} />
                <Typography fontSize={1} color="lightGrey" m={0}>
                  {item.date}
                </Typography>
              </Flex>
              <TopicItem>
                <Box>
                  <Typography fontSize={1} color="#aaa">
                    {item.text}
                  </Typography>
                </Box>
                {index === 0 && <>{children}</>}
                {!!item.attachments && (
                  <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                    <Typography fontSize={[1, 2, 3]} color="lightGrey" fontWeight={500}>
                      Anexos:
                    </Typography>
                    {item.attachments.map((file) => (
                      <Button color="primary" linkButton onClick={() => console.log('Get file')}>
                        {file.label}
                      </Button>
                    ))}
                  </Flex>
                )}
              </TopicItem>
            </TopicItemWrapper>
          ))}
        </ContentWrapper>
      </Fieldset>
    </StyledDemandDetailing>
  )
}

export default DemandDetailing
